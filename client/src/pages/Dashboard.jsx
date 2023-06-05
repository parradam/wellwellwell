import { Link } from 'react-router-dom'
import ContentWrapper from '../components/ContentWrapper'
import Tasks from '../components/Tasks/Tasks'
import Heatmap from '../components/Heatmap/Heatmap'

const Dashboard = () => {
    return (
        <ContentWrapper>
            <div>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p>
                    Welcome back,{' '}
                    <span className="font-semibold text-blue-700">
                        <Link to="/profile">Adam</Link>
                    </span>
                    . Here is your dashboard for today.
                </p>
            </div>
            <Tasks />
            <Heatmap />
        </ContentWrapper>
    )
}

export default Dashboard
