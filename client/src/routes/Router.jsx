import { useRoutes } from 'react-router-dom'
import MainAppWrapper from '../components/MainAppWrapper'
import Dashboard from '../pages/Dashboard'
import MyDay from '../pages/MyDay'
import ErrorPage from '../pages/ErrorPage'

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
