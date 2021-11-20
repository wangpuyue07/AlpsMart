import '../styles/globals.css';
import {getSession, SessionProvider} from "next-auth/react"
import {useEffect, useState, useCallback} from "react";


function MyApp({Component, pageProps}) {
    const [session, setSession] = useState({});
    useEffect(async () => {
        const session = await getSession();
        setSession(session);
    }, []);
    const freshData = useCallback((data) => {
        if (data.session) {
            setSession(data.session);
        }
    }, [])
    pageProps.session=session;
    pageProps.freshData = freshData;
    return <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
    </SessionProvider>
}

export default MyApp
