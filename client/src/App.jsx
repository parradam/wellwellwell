import Router from './routes/Router'
import { useCheckAuth } from './hooks/useCheckAuth'
import { useNavigate } from 'react-router-dom'

const App = () => {
    const navigate = useNavigate()
    const isUserValid = useCheckAuth()

    if (!isUserValid) {
        navigate('/login')
        return null
    }

    return <Router />
}

export default App
