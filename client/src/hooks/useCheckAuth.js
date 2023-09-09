import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { isValidUser, logOutUser, getUserProfile } from '../api/auth'

export const useCheckAuth = async () => {
    const [isUserValid, setIsValidUser] = useState(null)

    useEffect(() => {
        const checkValidUser = async () => {
            try {
                const response = await isValidUser()
                setIsValidUser(response)
            } catch (error) {
                logOutUser()
            }
            setIsValidUser(false)
        }

        checkValidUser()
    }, [])

    return isUserValid
}

export const useProfileQuery = () => {
    return useQuery({ queryKey: ['profileData'], queryFn: getUserProfile })
}
