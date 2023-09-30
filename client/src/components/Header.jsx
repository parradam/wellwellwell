import { useNavigate } from 'react-router-dom'
import { logOutUser } from '../api/cookies'

const Header = () => {
    const navigate = useNavigate()

    const handleLogOutUser = () => {
        logOutUser()
        navigate('/login')
    }

    return (
        <header className="flex justify-between p-3">
            <div className="text-4xl font-extrabold drop-shadow-lg">
                <span className="font-extrabold text-blue-600">well</span>
                <span className="font-extrabold text-white italic">well</span>
                <span className="font-extrabold text-blue-700">well</span>
            </div>
            <div>
                <button
                    onClick={handleLogOutUser}
                    className="py-2 px-4 rounded-lg bg-blue-500 font-bold text-white hover:bg-blue-600"
                >
                    Log out
                </button>
            </div>
        </header>
    )
}

export default Header
