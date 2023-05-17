import Heatmap from '../components/Heatmap'

const Dashboard = () => {
    return (
        <div>
            <div className="p-6 flex flex-col gap-3">
                <div id="welcome-text">
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                    <p>
                        Welcome back,{' '}
                        <span className="font-semibold text-blue-700">
                            Adam
                        </span>
                        . Here is your dashboard for today.
                    </p>
                </div>
                <Heatmap />
            </div>
        </div>
    )
}

export default Dashboard
