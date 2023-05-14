import Nav from './components/Nav'
import Heatmap from './components/Heatmap'

const App = () => {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-tr from-white to-blue-200">
                <Nav />
                <div>
                    <div className="container mx-auto pt-10">
                        <div className="flex flex-col w-10/12 bg-slate-50 mx-auto rounded-md overflow-hidden shadow-lg">
                            <div className="px-5 py-5 flex flex-col gap-3">
                                <div id="welcome-text">
                                    <h1 className="text-3xl font-bold">
                                        Dashboard
                                    </h1>
                                    <p>
                                        Welcome back,{' '}
                                        <span className="font-semibold text-violet-700">
                                            Adam
                                        </span>
                                        . Here is your dashboard for today.
                                    </p>
                                </div>
                                <Heatmap />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
