import axios from 'axios'

const baseUrl = `${import.meta.env.VITE_SERVER_URL}/api/days`

const getWellnessData = async () => {
    const response = await axios.get(baseUrl, { withCredentials: true })
    return response.data
}

const removeWellnessData = async ({ id }) => {
    const response = await axios.delete(`${baseUrl}/${id}`, {
        withCredentials: true,
    })
    return response.data
}

const addWellnessData = async (data) => {
    const response = await axios.post(baseUrl, data, { withCredentials: true })
    return response.data
}

export { getWellnessData, removeWellnessData, addWellnessData }
