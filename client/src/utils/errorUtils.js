export const getErrorType = (error) => {
    const {
        response: {
            data: {
                customErrorType = 'auth/unknown',
                formField = '',
                message = 'An error occurred. Please try again',
            } = {},
        } = {},
    } = error ?? {}

    return { customErrorType, formField, message }
}
