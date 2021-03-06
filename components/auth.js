import React from 'react';
import {getSession, useSession} from "next-auth/react"
import {useRouter} from 'next/router';
import {Spin} from 'antd';
import Loading from '../components/loading'





export default function Auth({children,session,freshData}) {
    const {status} = useSession();
    const router = useRouter();
    React.useEffect(() => {
        if (status === "unauthenticated") {
            freshData({});
            router.push(`/auth/signin?callback=${window.location.pathname}`, '/auth/signin')
        }
    }, [status]);
    console.log(status,session);
    if (session?.user) {
        return children
    }
    return <Loading/>
}
