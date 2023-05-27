import { Link } from 'react-router-dom'
import ContentWrapper from '../components/ContentWrapper'
import TaskList from '../components/TaskList'
import Heatmap from '../components/Heatmap'

const Dashboard = () => {
    const tasks = [
        {
            title: 'Record how you feel',
            status: 'done',
            path: '/my-day',
            emoji: '🎗',
        },
        {
            title: 'An incomplete task',
            status: 'ongoing',
            path: '/my-day',
            emoji: '🤯',
        },
    ]

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
            <TaskList tasks={tasks} />
            <Heatmap />
        </ContentWrapper>
    )
}

export default Dashboard
