import axios from 'axios'
import { loadFromSessionStorage, saveToSessionStorage } from './storage'

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

const isValidUser = async () => {
    const response = await axios.get(`${baseUrl}/protected`, {
        headers: {
            Authorization: loadFromSessionStorage('authToken'),
        },
    })
    return response
}

export { registerUser, logInUser, isValidUser }
