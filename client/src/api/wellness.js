import axios from 'axios'

const baseUrl = `${import.meta.env.VITE_WELLNESS_URL}/api/days`

const getWellnessData = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const addWellnessData = async (data) => {
    const response = await axios.post(baseUrl, data)
    return response.data
}

export { getWellnessData, addWellnessData }
