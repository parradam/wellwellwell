import ContentWrapper from '../components/ContentWrapper'
import Heatmap from '../components/Heatmap'

const Dashboard = () => {
    return (
        <ContentWrapper>
            <div>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p>
                    Welcome back,{' '}
                    <span className="font-semibold text-blue-700">Adam</span>.
                    Here is your dashboard for today.
                </p>
            </div>
            <Heatmap />
        </ContentWrapper>
    )
}

export default Dashboard
