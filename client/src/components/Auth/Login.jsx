import LoginForm from './LoginForm'
import { logInUser } from '../../api/auth'

const Login = () => {
    return (
        <div className="text-slate-800 flex flex-col gap-6">
            <div>
                <h2 className="text-4xl font-bold mb-4">Log in</h2>
                <p className="text-2xl">Let&apos;s get started.</p>
            </div>
            <LoginForm logInUser={logInUser} />
        </div>
    )
}

export default Login
