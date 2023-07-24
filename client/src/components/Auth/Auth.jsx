// This is the generic Auth page that will show the Login component, with a button to switch to the Register component
const Auth = () => {
    return (
        <>
            <div className="py-10 lg:py-40 bg-gradient-to-tl from-white to-blue-400 min-h-screen">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
                        <div className="w-full lg:w-1/2 py-12 lg:py-12 px-8 lg:px-12 bg-blue-400 text-white">
                            <div>
                                <h2 className="text-4xl mb-4">
                                    <div className="text-4xl font-extrabold drop-shadow-lg">
                                        <span className="font-extrabold text-transparent text-blue-600">
                                            well
                                        </span>
                                        <span className="font-extrabold text-white italic">
                                            well
                                        </span>
                                        <span className="font-extrabold text-blue-700">
                                            well
                                        </span>
                                    </div>
                                </h2>
                                <div className="flex flex-col text-2xl gap-6">
                                    <p className="text-2xl">
                                        Look after yourself.
                                    </p>
                                    <ul className="flex flex-col gap-2 font-bold text-green-500">
                                        <li className="before:content-['📋'] before:mr-2">
                                            <span>Create a profile</span>
                                        </li>
                                        <li className="before:content-['⌨️'] before:mr-2">
                                            <span>Record how you feel</span>
                                        </li>
                                        <li className="before:content-['📊'] before:mr-2">
                                            <span>Gain insights</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 py-12 lg:py-12 px-8 lg:px-12 flex flex-col gap-6 text-slate-800">
                            <div>
                                <h2 className="text-3xl font-bold mb-4">
                                    Register
                                </h2>
                                <p className="text-2xl">
                                    Create your free account.
                                </p>
                            </div>
                            {/* <RegisterForm
                                registerUser={registerUser}
                                navigate={navigate}
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth
