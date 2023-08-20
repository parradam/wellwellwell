import axios from 'axios'
import {
    saveToSessionStorage,
    loadFromSessionStorage,
    removeFromSessionStorage,
} from './storage'

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
    const response = await axios.post(`${baseUrl}/login`, {
        username,
        password,
    })
    if (response.data.token) {
        saveToSessionStorage('authToken', response.data.token)
    }
    return response.data
}

const logOutUser = () => {
    removeFromSessionStorage('authToken')
}

const isValidUser = async () => {
    try {
        const token = loadFromSessionStorage('authToken')
        if (token === null) return false

        await axios.get(`${baseUrl}/protected`, {
            headers: {
                Authorization: token,
            },
        })
        return true
    } catch (error) {
        return false
    }
}

export { registerUser, logInUser, logOutUser, isValidUser }
