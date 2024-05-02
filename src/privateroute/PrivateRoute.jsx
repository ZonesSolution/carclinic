import { useEffect, useState } from "react"
import { useAuth } from "../context/authContext"
import axios from "axios"
import { Outlet } from "react-router-dom"
import Spinner from "../components/spinner"

const PrivateRoute = () => {
    const [ok, setOk] = useState(false)
    const [auth, setAuth] = useAuth()

    useEffect(() => {
        const authCheck = async () => {
            const response = await axios.get('/api/api/v1/auth/auth-check')
            if (response?.data.ok) {
                setOk(true)
            } else {
                setOk(false)
            }
        }
        if (auth?.token) authCheck()
    }, [auth?.token])

    return ok ? <Outlet /> : <Spinner />;
}

export default PrivateRoute