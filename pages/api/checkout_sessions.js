const stripe = require('stripe')('sk_test_51JsqSTCnmrpYZEi5xmbY7pMqig31mycLKrmMj7dyrTdGVQRPvjTXgpLhlP0tpXH6iGjBtx7ouj8VzFHPLoAo9uXP00ZMFJYgIm');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create({
                ...req.body,
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
                phone_number_collection: {
                    enabled: true,
                },
                mode: 'payment',
                success_url: `${req.headers.origin}/auth/me?success=true&session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${req.headers.origin}/?canceled=true`,
                allow_promotion_codes:true,
                customer_update:{shipping:'auto'}
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
