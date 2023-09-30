import axios from 'axios'
import { saveToSessionStorage } from './storage'

const baseUrl = `${import.meta.env.VITE_SERVER_URL}/api/users`

const registerUser = async ({ username, email, password }) => {
    const response = await axios.post(`${baseUrl}/register`, {
        username,
        email,
        password,
    })
    return response.data
}

const logInUser = async ({ username, password }) => {
    const response = await axios.post(
        `${baseUrl}/login`,
        {
            username,
            password,
        },
        { withCredentials: true }
    )
    if (response.data.token) {
        saveToSessionStorage('authToken', response.data.token)
    }
    return response.data
}

const isValidUser = async () => {
    try {
        await axios.get(`${baseUrl}/protected`, {
            withCredentials: true,
        })
        return true
    } catch (error) {
        return false
    }
}

const getUserProfile = async () => {
    const response = await axios.get(`${baseUrl}/profile`, {
        withCredentials: true,
    })
    return response.data
}

export { registerUser, logInUser, isValidUser, getUserProfile }
