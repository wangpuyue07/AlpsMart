const stripe = require('stripe')('sk_test_51JsqSTCnmrpYZEi5xmbY7pMqig31mycLKrmMj7dyrTdGVQRPvjTXgpLhlP0tpXH6iGjBtx7ouj8VzFHPLoAo9uXP00ZMFJYgIm');
import axios from 'axios';


export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const customer = await stripe.customers.create({
                email: req.body.email,
                name: `${req.body.firstName} ${req.body.lastName}`,
            });
            const response = await axios.post(`http://${process.env.strapiServer}/auth/local/register`, {
                username: customer.name,
                email: customer.email,
                password: req.body.password,
                stripeId:customer.id
            });
            res.json(response.data);
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
