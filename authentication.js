'use server'
import { cookies } from "next/headers"
import axios from "axios"
import { be_url } from "./config_var"



const handleLogin = async (loginForm) => {
    const cookieStore = cookies()
    try {
        const sendLogin = await axios.post(`${be_url}/auth/login`, {
            email: loginForm.email,
            password: loginForm.password
        })
        cookieStore.set("userToken", sendLogin.data.token)
        cookieStore.set("userId", sendLogin.data.userid)
        return true
    }
    catch (e) {
        console.log(e)
    }
}

const handleLogout = async () => {
    cookies().delete("userToken")
    cookies().delete("userId")
    return true
}

const getUserToken = async () => {
    if (cookies().get("userToken")) return cookies().get("userToken").value
    return null
}

const getUserId = async () => {
    if (cookies().get("userId")) return cookies().get("userId").value
    return null
}

export {handleLogin, handleLogout, getUserToken, getUserId}