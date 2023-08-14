import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
    getWellnessData,
    removeWellnessData,
    addWellnessData,
} from '../api/wellness'

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

export const useRemoveWellnessMutation = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: removeWellnessData,
        onSuccess: () => {
            queryClient.invalidateQueries(['wellnessData'])
        },
    })
}
