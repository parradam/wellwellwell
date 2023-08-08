import RegisterForm from './RegisterForm'
import { registerUser } from '../../api/auth'

const Register = () => {
    return (
        <div className="text-slate-800 flex flex-col gap-6">
            <div>
                <h2 className="text-4xl font-bold mb-4">Register</h2>
                <p className="text-2xl">Create your free account.</p>
            </div>
            <RegisterForm registerUser={registerUser} />
        </div>
    )
}

export default Register
