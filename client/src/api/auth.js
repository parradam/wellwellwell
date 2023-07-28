import axios from 'axios'

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
    return response.data
}

export { registerUser, logInUser }
