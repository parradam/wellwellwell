import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { isValidUser } from '../api/auth'

export const useCheckAuth = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const checkValidUser = async () => {
            try {
                const response = await isValidUser()
                if (response) return true
            } catch (error) {
                navigate('/login')
            }
        }

        checkValidUser()
    }, [navigate])
}
