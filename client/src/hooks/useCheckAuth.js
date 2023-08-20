import { useEffect, useState } from 'react'
import { isValidUser } from '../api/auth'
import { logOutUser } from '../api/auth'

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
