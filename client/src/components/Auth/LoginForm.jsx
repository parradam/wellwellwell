import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { getErrorType } from '../../utils/errorUtils'

const LoginForm = ({ logInUser }) => {
    const navigate = useNavigate()

    const schema = z.object({
        username: z
            .string()
            .min(1, 'Username is required')
            .min(6, 'Username is too short')
            .max(20, 'Username is too long'),
        password: z.string().min(1, 'Password is required'),
    })

    const { register, handleSubmit, formState, setError } = useForm({
        mode: 'onTouched',
        resolver: zodResolver(schema),
    })

    const { isSubmitting, errors } = formState

    const handleSave = async (formData) => {
        const { username, password } = formData

        try {
            const response = await logInUser({ username, password })
            if (response.success) {
                navigate('/')
            }
        } catch (error) {
            const { formField, message } = getErrorType(error)
            setError(formField, { type: 'manual', message: message })
        }
    }

    const handleRedirectToRegister = (event) => {
        event.preventDefault()
        navigate('/signup')
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
                    <label htmlFor="Password" className="font-semibold">
                        Password
                    </label>
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
                    Log in
                </button>
                <button
                    onClick={handleRedirectToRegister}
                    className="py-2 rounded-lg bg-violet-500 font-bold text-white hover:bg-violet-700"
                >
                    I&apos;m new here
                </button>
                <span className="text-center text-sm">
                    <Link to="/reset">Forgot your password?</Link>
                </span>
            </div>
        </form>
    )
}

export default LoginForm
