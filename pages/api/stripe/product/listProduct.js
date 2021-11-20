import axios from "axios";
import {getSession} from "next-auth/react"
const stripe = require('stripe')('sk_test_51JsqSTCnmrpYZEi5xmbY7pMqig31mycLKrmMj7dyrTdGVQRPvjTXgpLhlP0tpXH6iGjBtx7ouj8VzFHPLoAo9uXP00ZMFJYgIm');


export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const products = await stripe.products.list(
                {ids:req.body.ids}
            );
            res.json(products);
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    }
    else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
