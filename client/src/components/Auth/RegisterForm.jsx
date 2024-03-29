import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { getErrorType } from '../../utils/errorUtils'

const RegisterForm = ({ registerUser }) => {
    const navigate = useNavigate()

    const schema = z
        .object({
            username: z
                .string()
                .min(1, 'Username is required')
                .min(6, 'Username is too short')
                .max(20, 'Username is too long')
                .refine(
                    (value) => /^[a-zA-Z0-9-_!?]+$/.test(value),
                    'Username contains invalid characters'
                ),
            email: z.string().email('Email address is invalid'),
            password: z
                .string()
                .min(1, 'Password is required')
                .min(6, 'Password is too short'),
            confirmPassword: z
                .string()
                .min(1, 'Password is required')
                .min(6, 'Password is too short'),
        })
        .refine((data) => data.password === data.confirmPassword, {
            message: 'Passwords do not match',
            path: ['confirmPassword'],
        })

    const { register, handleSubmit, formState, setError } = useForm({
        mode: 'onTouched',
        resolver: zodResolver(schema),
    })

    const { isSubmitting, errors } = formState

    const handleSave = async (formData) => {
        const { username, email, password } = formData

        try {
            await registerUser({ username, email, password })
            handleRedirectToLogin()
        } catch (error) {
            const { formField, message } = getErrorType(error)
            setError(formField, { type: 'manual', message: message })
        }
    }

    const handleRedirectToLogin = (event) => {
        event.preventDefault()
        navigate('/login')
    }

    return (
        <form
            onSubmit={handleSubmit(handleSave)}
            className="flex flex-col gap-5"
        >
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <label htmlFor="username" className="font-semibold">
                        Username
                    </label>
                    <span className="text-sm text-gray-500">
                        6-20 chars, allowed characters: A-Z, 0-9, ?!_-
                    </span>
                    <span className="text-sm text-red-600">
                        {errors.username?.message}
                    </span>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="johnnybravo"
                        {...register('username')}
                        className="border border-gray-400 py-1 px-2 rounded-lg"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="font-semibold">
                        Email
                    </label>
                    <span className="text-sm text-red-600">
                        {errors.email?.message}
                    </span>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="johnnybravo@warner.com"
                        {...register('email')}
                        className="border border-gray-400 py-1 px-2 rounded-lg"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="Password" className="font-semibold">
                        Password
                    </label>
                    <span className="text-sm text-gray-500">
                        6 chars, at least 1 uppercase letter and number
                    </span>
                    {errors.password?.message && (
                        <span className="text-sm text-red-600">
                            {errors.password?.message}
                        </span>
                    )}
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="myP4ssword!"
                        {...register('password')}
                        className="border border-gray-400 py-1 px-2 rounded-lg"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="confirmPassword" className="font-semibold">
                        Confirm password
                    </label>
                    <span className="text-sm text-red-600">
                        {errors.confirmPassword?.message}
                    </span>
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="myP4ssword!"
                        {...register('confirmPassword')}
                        className="border border-gray-400 py-1 px-2 rounded-lg"
                    />
                </div>
                {errors[''] && (
                    <span className="text-sm text-red-600">
                        {errors[''].message}
                    </span>
                )}
            </div>
            <div className="flex flex-col gap-3">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="py-2 rounded-lg bg-blue-500 font-bold text-white hover:bg-blue-700"
                >
                    Sign up
                </button>
                <button
                    onClick={handleRedirectToLogin}
                    className="py-2 rounded-lg bg-violet-500 font-bold text-white hover:bg-violet-700"
                >
                    I already have an account
                </button>
            </div>
        </form>
    )
}

export default RegisterForm
