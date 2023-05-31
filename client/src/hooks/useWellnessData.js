import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getWellnessData, addWellnessData } from '../api/wellness'

export const useWellnessQuery = () => {
    return useQuery({ queryKey: ['wellnessData'], queryFn: getWellnessData })
}

export const useAddWellnessMutation = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: addWellnessData,
        onSuccess: () => {
            queryClient.invalidateQueries(['wellnessData'])
        },
    })
}
