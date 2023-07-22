import { useRoutes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import MyDay from '../pages/MyDay'
import ErrorPage from '../pages/ErrorPage'

const Router = () => {
    const routes = useRoutes([
        { path: '/', element: <Dashboard /> },
        { path: '/my-day', element: <MyDay /> },
        { path: '/*', element: <ErrorPage /> },
    ])
    return routes
}

export default Router
