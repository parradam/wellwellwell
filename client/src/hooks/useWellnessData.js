import { useQuery } from '@tanstack/react-query'
import { getWellnessData } from '../api/wellness'

export const useWellnessData = () => {
    return useQuery({ queryKey: ['wellnessData'], queryFn: getWellnessData })
}
