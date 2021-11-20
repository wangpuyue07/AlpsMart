const stripe = require('stripe')('sk_test_51JsqSTCnmrpYZEi5xmbY7pMqig31mycLKrmMj7dyrTdGVQRPvjTXgpLhlP0tpXH6iGjBtx7ouj8VzFHPLoAo9uXP00ZMFJYgIm');
import axios from 'axios';


export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const orders = await stripe.orders.list({
                limit: 3,
            });
            console.log(orders);
            res.json(orders);
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'GET');
        res.status(405).end('Method Not Allowed');
    }
}
