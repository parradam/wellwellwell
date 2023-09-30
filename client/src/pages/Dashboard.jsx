import { Link } from 'react-router-dom'
import { useProfileQuery } from '../hooks/useCheckAuth'
import Heatmap from '../components/Heatmap/Heatmap'

const Dashboard = () => {
    const { isLoading, isError, data } = useProfileQuery()

    if (isLoading) return <div>Loading your details...</div>

    if (isError)
        return (
            <div>
                There was an error loading your details. Please try again soon!
            </div>
        )

    const { username } = data

    return (
        <>
            <div>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p>
                    Welcome back,{' '}
                    <span className="font-semibold text-blue-700">
                        <Link to="/profile">{username}</Link>
                    </span>
                    . Here is your dashboard for today.
                </p>
            </div>
            <Heatmap />
        </>
    )
}

export default Dashboard
