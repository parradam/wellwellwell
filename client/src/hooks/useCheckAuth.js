import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { isValidUser } from '../api/auth'

export const useCheckAuth = ({ setIsCheckAuthComplete }) => {
    const navigate = useNavigate()

    useEffect(() => {
        const checkValidUser = async () => {
            try {
                const response = await isValidUser()
                if (response) setIsCheckAuthComplete(true)
            } catch (error) {
                setIsCheckAuthComplete(true)
                navigate('/login')
            }
        }

        checkValidUser()
    }, [navigate, setIsCheckAuthComplete])
}
