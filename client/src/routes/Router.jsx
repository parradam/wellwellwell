import { useRoutes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'

const Router = () => {
    const routes = useRoutes([
        { path: '/', element: <div>Home</div> },
        { path: '/dashboard', element: <Dashboard /> },
    ])
    return routes
}

export default Router
