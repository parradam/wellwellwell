import { Link } from 'react-router-dom'
import ContentWrapper from '../components/ContentWrapper'
import Heatmap from '../components/Heatmap'

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
                <h2 className="text-2xl font-semibold">To do</h2>
                <ul>
                    <li className="font-semibold text-blue-700">
                        <Link to="/my-day">Record how you feel</Link>
                    </li>
                </ul>
            </div>
            <Heatmap />
        </ContentWrapper>
    )
}

export default Dashboard
