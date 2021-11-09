const stripe = require('stripe')('sk_test_51JsqSTCnmrpYZEi5xmbY7pMqig31mycLKrmMj7dyrTdGVQRPvjTXgpLhlP0tpXH6iGjBtx7ouj8VzFHPLoAo9uXP00ZMFJYgIm');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create({
                line_items: [
                    {
                        price: 'price_1JtTsOCnmrpYZEi5JX8M7uIY',
                        quantity: 2,
                    },{
                        price: 'price_1Jt6blCnmrpYZEi5u6qOQOj6',
                        quantity: 1,
                    },
                ],
                shipping_rates: ['shr_1JtVa1CnmrpYZEi5Wx1q2YtE'],
                shipping_address_collection: {
                    allowed_countries: ['NZ'],
                },
                automatic_tax: {
                    enabled: true,
                },
                payment_method_types: [
                    'card',
                    'alipay',
                ],
                mode: 'payment',
                success_url: `${req.headers.origin}/account/me?success=true&session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${req.headers.origin}/?canceled=true`,
            });
            res.json({ id: session.id });
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
