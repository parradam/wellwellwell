import { useState } from 'react'
import Router from './routes/Router'
import { useCheckAuth } from './hooks/useCheckAuth'

const App = () => {
    const [isCheckAuthComplete, setIsCheckAuthComplete] = useState()
    useCheckAuth({ setIsCheckAuthComplete })

    if (isCheckAuthComplete) return <Router />
}

export default App
