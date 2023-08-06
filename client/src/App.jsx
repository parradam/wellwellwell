import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Router from './routes/Router'
import { isValidUser } from './api/auth'

const App = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const checkValidUser = async () => {
            try {
                const response = await isValidUser()
                if (response) return true
            } catch (error) {
                console.log('error', error.response.status)
                navigate('/login')
            }
        }

        checkValidUser()
    })

    return <Router />
}

export default App
