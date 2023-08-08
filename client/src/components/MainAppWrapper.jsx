import Header from './Header'
import Nav from './Nav'

const MainAppWrapper = ({ children }) => {
    return (
        <div className="min-h-screen bg-gradient-to-tr from-white to-blue-400">
            <div>
                <Header />
                <div className="container mx-auto pt-10">
                    <div className="flex flex-col w-10/12 bg-slate-50 mx-auto rounded-lg overflow-hidden shadow-lg">
                        <div className="md:flex p-1">
                            <Nav />
                            <div className="w-full p-6 flex flex-col gap-3">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainAppWrapper
