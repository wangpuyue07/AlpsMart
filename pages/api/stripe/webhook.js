import {buffer} from "micro";

const stripe = require('stripe')('sk_test_51JsqSTCnmrpYZEi5xmbY7pMqig31mycLKrmMj7dyrTdGVQRPvjTXgpLhlP0tpXH6iGjBtx7ouj8VzFHPLoAo9uXP00ZMFJYgIm');
const endpointSecret = 'whsec_E4zpPQGWRsPL1GBXt46IrWUqOuX8RLvs';

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
            case 'checkout.session.completed':{
                const session = event.data.object;
                if (session?.payment_status === 'paid') {
                    console.log("1.获取session对应货物");
                    console.log("2.strapi更新清空购物车");
                    console.log("3.strapi更新订单session");
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
