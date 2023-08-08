import { useRoutes } from 'react-router-dom'
import MainAppWrapper from '../components/MainAppWrapper'
import Dashboard from '../pages/Dashboard'
import MyDay from '../pages/MyDay'
import ErrorPage from '../pages/ErrorPage'
import AuthWrapper from '../components/Auth/AuthWrapper'
import Register from '../components/Auth/Register'
import Login from '../components/Auth/Login'

const Router = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: (
                <MainAppWrapper>
                    <Dashboard />
                </MainAppWrapper>
            ),
        },
        {
            path: '/signup',
            element: (
                <AuthWrapper>
                    <Register />
                </AuthWrapper>
            ),
        },
        {
            path: '/login',
            element: (
                <AuthWrapper>
                    <Login />
                </AuthWrapper>
            ),
        },
        {
            path: '/my-day',
            element: (
                <>
                    <MainAppWrapper>
                        <MyDay />
                    </MainAppWrapper>
                </>
            ),
        },
        {
            path: '/*',
            element: (
                <>
                    <MainAppWrapper>
                        <ErrorPage />
                    </MainAppWrapper>
                </>
            ),
        },
    ])
    return routes
}

export default Router
