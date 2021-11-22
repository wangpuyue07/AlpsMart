import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import axios from 'axios'
const adminJWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM3MzA2NjAyLCJleHAiOjE2Mzk4OTg2MDJ9.BGFPthHq9QEdH4Pi92nfVXtnP9-RU3dYJ38UKCpxE6c';


export default async (req, res) => {
    return NextAuth(req, res, {
        providers: [
            CredentialsProvider({
                name: 'Credentials',
                credentials: {
                    email: {label: "Email", type: "text"},
                    password: {label: "Password", type: "password"}
                },
                async authorize(credentials) {
                    credentials.identifier = credentials.email;
                    try {
                        const res = await fetch(`http://${process.env.strapiServer}/auth/local`, {
                            method: 'POST',
                            body: JSON.stringify(credentials),
                            headers: {"Content-Type": "application/json"}
                        })
                        const data = await res.json();
                        if (!data.jwt) {
                            return null;
                        }

                        return data;
                    } catch (e) {
                        console.log('caught error');
                        // const errorMessage = e.response.data.message
                        // Redirecting to the login page with error message          in the URL
                        // throw new Error(errorMessage + '&email=' + credentials.email)
                        return null;
                    }
                }
            })
        ],

        session: {
            strategy: "jwt",
        },

        secret: 'jose newkey -s 512 -t oct -a HS512',
        callbacks: {
            async signIn({user, account, profile, email, credentials}) {
                return user.user && !user.user.blocked;
            },
            jwt: async ({token, user}) => {

                if (user) {
                    token.jwt = user.jwt;
                    token.userId = user.user.id;
                }
                return token;
            },

            session: async ({session, token}) => {
                try{
                    const res = await fetch(`http://${process.env.strapiServer}/users/${token.userId}`, {
                        method: 'GET',
                        headers: {
                            Authorization:
                                `Bearer ${adminJWT}`,
                        }
                    })
                    const user = await res.json();
                    session.user = user;
                    session.jwt = token.jwt;
                }catch (e){
                    console.log(e.message);
                }
                return session;
            },
        },
        pages: {
            signIn: '/auth/signin',
            signOut: '/auth/signout',
            verifyRequest: '/auth/verify-request', // (used for check email message)
            newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
        },
    });
}
