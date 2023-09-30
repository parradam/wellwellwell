import axios from 'axios'
import { loadFromSessionStorage } from './storage'

const baseUrl = `${import.meta.env.VITE_SERVER_URL}/api/days`

const getWellnessData = async () => {
    const response = await axios.get(baseUrl, { withCredentials: true })
    return response.data
}

const removeWellnessData = async ({ id }) => {
    const response = await axios.delete(`${baseUrl}/${id}`, {
        headers: {
            Authorization: loadFromSessionStorage('authToken'),
        },
    })
    return response.data
}

const addWellnessData = async (data) => {
    const response = await axios.post(baseUrl, data, {
        headers: {
            Authorization: loadFromSessionStorage('authToken'),
        },
    })
    return response.data
}

export { getWellnessData, removeWellnessData, addWellnessData }
