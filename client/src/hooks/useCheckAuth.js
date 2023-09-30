import { useQuery } from '@tanstack/react-query'
import { getUserProfile } from '../api/auth'

export const useProfileQuery = () => {
    return useQuery({ queryKey: ['profileData'], queryFn: getUserProfile })
}
