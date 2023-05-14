import axios from 'axios'

const baseUrl = 'http://localhost:8000/wellness'

const getWellnessData = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

export { getWellnessData }
