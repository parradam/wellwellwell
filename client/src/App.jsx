// import { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import Router from './routes/Router'
// import { isValidUser } from './api/auth'
import { useCheckAuth } from './hooks/useCheckAuth'

const App = () => {
    useCheckAuth()

    return <Router />
}

export default App
