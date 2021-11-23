import axios from "axios";
import {getSession} from "next-auth/react"

const adminJWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM3MzA2NjAyLCJleHAiOjE2Mzk4OTg2MDJ9.BGFPthHq9QEdH4Pi92nfVXtnP9-RU3dYJ38UKCpxE6c';


export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const response = await axios.get(`http://${process.env.strapiServer}/orders/${req.query.id}`,
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
