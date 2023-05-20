import { useRoutes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import MyDay from '../pages/MyDay'

const Router = () => {
    const routes = useRoutes([
        { path: '/', element: <div>Home</div> },
        { path: '/dashboard', element: <Dashboard /> },
        { path: '/my-day', element: <MyDay /> },
    ])
    return routes
}

export default Router
