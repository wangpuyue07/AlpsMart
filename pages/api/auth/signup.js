const stripe = require('stripe')('sk_test_51JsqSTCnmrpYZEi5xmbY7pMqig31mycLKrmMj7dyrTdGVQRPvjTXgpLhlP0tpXH6iGjBtx7ouj8VzFHPLoAo9uXP00ZMFJYgIm');
import axios from 'axios';

const adminJWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM3MzA2NjAyLCJleHAiOjE2Mzk4OTg2MDJ9.BGFPthHq9QEdH4Pi92nfVXtnP9-RU3dYJ38UKCpxE6c';


export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const customer = await stripe.customers.create({
                email: req.body.email,
                name: `${req.body.firstName} ${req.body.lastName}`,
            });
            console.log({
                username: customer.name,
                email: customer.email,
                password: req.body.password,
                stripeId:customer.id
            });
            const response = await axios.post(`http://${process.env.strapiServer}/auth/local/register`, {
                username: customer.email,
                email: customer.email,
                password: req.body.password,
                stripeId:customer.id,
                name:customer.name,
                cartItems:[],
                orders:[]
            },{
                headers: {
                    Authorization:
                        `Bearer ${adminJWT}`,
                },
            });
            res.json(response.data);
        } catch (err) {
            console.log(err.message,err.data);
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
