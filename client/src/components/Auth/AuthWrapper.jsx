// This is the generic Auth page that will show the Login component, with a button to switch to the Register component
const AuthWrapper = ({ children }) => {
    return (
        <>
            <div className="py-10 lg:py-40 bg-gradient-to-tl from-white to-blue-400 min-h-screen">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
                        <div className="w-full lg:w-1/2 py-12 lg:py-12 px-8 lg:px-12 bg-blue-400 text-white flex flex-col justify-between">
                            <div>
                                <h2 className="text-4xl mb-4">
                                    <div className="text-4xl font-extrabold drop-shadow-lg">
                                        <span className="font-extrabold text-blue-600">
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
                                <div className="flex flex-col gap-6">
                                    <p className="text-2xl">
                                        Look after yourself.
                                    </p>
                                    <ul className="flex flex-col gap-3 text-2xl font-bold">
                                        <li className="before:content-['📋'] before:mr-2 ">
                                            <span>
                                                Create a{' '}
                                                <span className="bg-purple-600 italic">
                                                    profile
                                                </span>
                                            </span>
                                        </li>
                                        <li className="before:content-['⌨️'] before:mr-2">
                                            <span>
                                                Record how you{' '}
                                                <span className="bg-pink-600 italic">
                                                    feel
                                                </span>
                                            </span>
                                        </li>
                                        <li className="before:content-['📊'] before:mr-2">
                                            <span>
                                                Gain{' '}
                                                <span className="bg-green-600 italic">
                                                    insights
                                                </span>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <blockquote className="flex flex-col p-4 gap-2">
                                <q className="text-2xl italic">
                                    Let us cultivate our garden
                                </q>
                                <cite className="text-right text-2xl font-bold">
                                    - Voltaire
                                </cite>
                                <p className="text-lg">
                                    Some believe that this quote from the
                                    multitalented philosopher&apos;s character,
                                    Candide, highlights the need for us to work
                                    on ourselves.
                                </p>
                            </blockquote>
                        </div>
                        <div className="w-full lg:w-1/2 py-12 lg:py-12 px-8 lg:px-12">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthWrapper
