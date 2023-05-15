import Header from './components/Header'
import Heatmap from './components/Heatmap'

const App = () => {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-tr from-white to-blue-200">
                <div>
                    <Header />
                    <div className="container mx-auto pt-10">
                        <div className="flex flex-col w-10/12 bg-slate-50 mx-auto rounded-lg overflow-hidden shadow-lg">
                            <div className="flex p-1">
                                {/* Nav */}
                                <div className="min-w-fit">
                                    <div className="bg-blue-600 text-white rounded-lg p-1">
                                        <ul className="flex flex-col gap-1 p-1">
                                            <li className="hover:bg-blue-500 border border-opacity-0 hover:border-opacity-50 border-blue-300 px-6 py-1 rounded-md cursor-pointer">
                                                Dashboard
                                            </li>
                                            <li className="hover:bg-blue-500 border border-opacity-0 hover:border-opacity-50 border-blue-300 px-6 py-1 rounded-md cursor-pointer">
                                                Heatmap
                                            </li>
                                            <li className="hover:bg-blue-500 border border-opacity-0 hover:border-opacity-50 border-blue-300 px-6 py-1 rounded-md cursor-pointer">
                                                Streak
                                            </li>
                                            <li className="hover:bg-blue-500 border border-opacity-0 hover:border-opacity-50 border-blue-300 px-6 py-1 rounded-md cursor-pointer">
                                                Ask for help
                                            </li>
                                            <li className="hover:bg-blue-500 border border-opacity-0 hover:border-opacity-50 border-blue-300 px-6 py-1 rounded-md cursor-pointer">
                                                Privacy policy
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="p-6 flex flex-col gap-3">
                                        <div id="welcome-text">
                                            <h1 className="text-3xl font-bold">
                                                Dashboard
                                            </h1>
                                            <p>
                                                Welcome back,{' '}
                                                <span className="font-semibold text-blue-700">
                                                    Adam
                                                </span>
                                                . Here is your dashboard for
                                                today.
                                            </p>
                                        </div>
                                        <Heatmap />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
