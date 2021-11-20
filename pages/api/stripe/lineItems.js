const stripe = require('stripe')('sk_test_51JsqSTCnmrpYZEi5xmbY7pMqig31mycLKrmMj7dyrTdGVQRPvjTXgpLhlP0tpXH6iGjBtx7ouj8VzFHPLoAo9uXP00ZMFJYgIm');



export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const lineItems = await stripe.checkout.sessions.listLineItems('cs_test_b1IIF7CamPuvx0RUudg3tAnFfTLrb0qDYBSAtGTppiEaZchcf1slDyrEFI');
            console.log(123, lineItems);
            res.json(lineItems);
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'GET');
        res.status(405).end('Method Not Allowed');
    }
}
