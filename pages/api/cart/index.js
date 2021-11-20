import axios from "axios";
import {getSession} from "next-auth/react"

const adminJWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM3MzA2NjAyLCJleHAiOjE2Mzk4OTg2MDJ9.BGFPthHq9QEdH4Pi92nfVXtnP9-RU3dYJ38UKCpxE6c';


export default async function handler(req, res) {
    const session = await getSession({req});
    if (req.method === 'POST') {
        const quantity = +req.body.quantity || 1;
        try {
            let cartItem = {};
            if (session.user?.cartItems.map(item => item.priceId).includes(req.body.priceId)) {
                session.user?.cartItems.forEach(item => {
                    if (item.priceId == req.body.priceId) {
                        cartItem = item;
                    }
                });
                const response = await axios.put(`http://${req.headers.host.split(':')[0]}:1337/cart-items/${cartItem.id}`,
                    {
                        quantity: +cartItem.quantity + quantity
                    },
                    {
                        headers: {
                            Authorization:
                                `Bearer ${adminJWT}`,
                        },
                    });
                res.json(response.data);
            } else {
                const response = await axios.post(`http://${req.headers.host.split(':')[0]}:1337/cart-items`, {
                        priceId: req.body.priceId,
                        user: session.user.id,
                        quantity,
                        productId: req.body.productId
                    },
                    {
                        headers: {
                            Authorization:
                                `Bearer ${adminJWT}`,
                        },
                    });
                res.json(response.data);
            }
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    }
    if (req.method === 'DELETE') {
        try {
            const response = await axios.delete(`http://${req.headers.host.split(':')[0]}:1337/cart-items/${req.body.id}`,
                {
                    headers: {
                        Authorization:
                            `Bearer ${adminJWT}`,
                    },
                });
            res.json(response.data);
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    }
    if (req.method === 'PUT') {
        try {
            const response = await axios.put(`http://${req.headers.host.split(':')[0]}:1337/cart-items/${req.body.id}`,
                {
                    quantity: req.body.quantity
                },
                {
                    headers: {
                        Authorization:
                            `Bearer ${adminJWT}`,
                    },
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
