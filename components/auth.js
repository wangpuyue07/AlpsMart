import React from 'react';
import {useSession} from "next-auth/react"
import {useRouter} from 'next/router';
import {Spin} from 'antd';
import Loading from '../components/loading'





export default function Auth({children}) {
    const {status,data} = useSession();
    const router = useRouter();
    React.useEffect(() => {
        if (status === "unauthenticated") {
            router.push(`/auth/signin?callback=${window.location.pathname}`, '/auth/signin')
        }
    }, [status])
    if (data?.user) {
        return children
    }
    return <Loading/>
}
