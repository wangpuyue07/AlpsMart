import {buffer} from "micro";
import axios from "axios";

const stripe = require('stripe')('sk_test_51JsqSTCnmrpYZEi5xmbY7pMqig31mycLKrmMj7dyrTdGVQRPvjTXgpLhlP0tpXH6iGjBtx7ouj8VzFHPLoAo9uXP00ZMFJYgIm');
const endpointSecret = 'whsec_E4zpPQGWRsPL1GBXt46IrWUqOuX8RLvs';
const adminJWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM3MzA2NjAyLCJleHAiOjE2Mzk4OTg2MDJ9.BGFPthHq9QEdH4Pi92nfVXtnP9-RU3dYJ38UKCpxE6c';


export const config = {
    api: {
        bodyParser: false,
    },
};


export default async function handler(request, response) {
    if (request.method === "POST") {
        let event;
        const buf = await buffer(request);
        // Only verify the event if you have an endpoint secret defined.
        // Otherwise use the basic event deserialized with JSON.parse
        const signature = request.headers['stripe-signature'];
        try {
            event = stripe.webhooks.constructEvent(
                buf,
                signature,
                endpointSecret
            );
        } catch (err) {
            console.log(`⚠️  Webhook signature verification failed.`, err.message);
            response.status(400).send(err.message);
            return;
        }

        // Handle the event
        switch (event.type) {
            case 'checkout.session.completed': {
                const session = event.data.object;
                if (session?.payment_status === 'paid') {
                    const {data:order} = await axios.post(`http://${process.env.strapiServer}/orders`, {
                            stripeSessionId: session.id,
                            parcels: [],
                            user: session.metadata.strapiUserId
                        },
                        {
                            headers: {
                                Authorization:
                                    `Bearer ${adminJWT}`,
                            },
                        });
                    const {data: listLineItems} = await stripe.checkout.sessions.listLineItems(session.id);
                    for (let item of listLineItems) {
                        for (let i = 0; i < item.quantity; i++) {
                            await axios.post(`http://${process.env.strapiServer}/parcels`, {
                                    postId: "",
                                    barcode: item.price.product,
                                    order: order.id
                                },
                                {
                                    headers: {
                                        Authorization:
                                            `Bearer ${adminJWT}`,
                                    },
                                });
                        }
                    };
                    const {data: user} = await axios.get(`http://${process.env.strapiServer}/users/${session.metadata.strapiUserId}`, {
                            headers: {
                                Authorization:
                                    `Bearer ${adminJWT}`,
                            },
                        }
                    );
                    for (let cartItem of user.cartItems) {
                        await axios.delete(`http://${process.env.strapiServer}/cart-items/${cartItem.id}`,
                            {
                                headers: {
                                    Authorization:
                                        `Bearer ${adminJWT}`,
                                },
                            });
                    }
                }
                break;
            }
            default:
                // Unexpected event type
                console.log(`Unhandled event type ${event.type}.`);
        }

        // Return a 200 response to acknowledge receipt of the event
        response.json({received: true});
    } else {
        response.setHeader("Allow", "POST");
        response.status(405).end("Method Not Allowed");
    }
}
