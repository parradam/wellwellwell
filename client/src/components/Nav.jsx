import { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    const [mobHidden, setMobHidden] = useState(true)

    const toggleMobHidden = () => {
        setMobHidden((prevState) => !prevState)
    }

    return (
        <div id="nav-container" className="min-w-fit">
            <div className="bg-blue-600 text-white rounded-lg px-2 md:py-2 flex flex-col divide-y divide-solid divide-blue-300 divide-opacity-50 drop-shadow-md">
                <div>
                    <div className="hidden md:block border border-opacity-0 hover:border-opacity-0 border-blue-300 pl-3 pr-10 py-2 font-bold text-lg before:content-['🧭'] before:mr-2">
                        Navigation
                    </div>
                    <div
                        className="block md:hidden border border-opacity-0 hover:border-opacity-0 border-blue-300 pl-3 pr-10 py-2 font-bold text-lg cursor-pointer before:content-['🧭'] before:mr-2"
                        onClick={toggleMobHidden}
                    >
                        {mobHidden ? 'Show navigation' : 'Hide navigation'}
                    </div>
                </div>
                <ul
                    className={`${
                        mobHidden && 'hidden md:flex'
                    } flex flex-col gap-1 px-1 py-2`}
                >
                    <Link to="/">
                        <li className="select-none hover:bg-blue-500 border border-opacity-0 hover:border-opacity-50 border-blue-300 pl-3 pr-10 py-1 rounded-md cursor-pointer before:content-['🏠'] before:mr-2">
                            Home
                        </li>
                    </Link>
                    <li className="select-none hover:bg-blue-500 border border-opacity-0 hover:border-opacity-50 border-blue-300 pl-3 pr-10 py-1 rounded-md cursor-pointer before:content-['👤'] before:mr-2">
                        Profile
                    </li>
                    <Link to="/dashboard">
                        <li className="select-none hover:bg-blue-500 border border-opacity-0 hover:border-opacity-50 border-blue-300 pl-3 pr-10 py-1 rounded-md cursor-pointer before:content-['📊'] before:mr-2">
                            Dashboard
                        </li>
                    </Link>
                    <Link to="/my-day">
                        <li className="select-none hover:bg-blue-500 border border-opacity-0 hover:border-opacity-50 border-blue-300 pl-3 pr-10 py-1 rounded-md cursor-pointer before:content-['🗓'] before:mr-2">
                            My day
                        </li>
                    </Link>
                    <li className="select-none hover:bg-blue-500 border border-opacity-0 hover:border-opacity-50 border-blue-300 pl-3 pr-10 py-1 rounded-md cursor-pointer before:content-['☀️'] before:mr-2">
                        Heatmap
                    </li>
                    <li className="select-none hover:bg-blue-500 border border-opacity-0 hover:border-opacity-50 border-blue-300 pl-3 pr-10 py-1 rounded-md cursor-pointer before:content-['📈'] before:mr-2">
                        Streak
                    </li>
                    <li className="select-none hover:bg-blue-500 border border-opacity-0 hover:border-opacity-50 border-blue-300 pl-3 pr-10 py-1 rounded-md cursor-pointer before:content-['🤗'] before:mr-2">
                        Ask for help
                    </li>
                    <li className="select-none hover:bg-blue-500 border border-opacity-0 hover:border-opacity-50 border-blue-300 pl-3 pr-10 py-1 rounded-md cursor-pointer before:content-['🧐'] before:mr-2">
                        Privacy policy
                    </li>
                </ul>
                <ul
                    className={`${
                        mobHidden && 'hidden md:flex'
                    } flex flex-col gap-1 px-1 py-2`}
                >
                    <li className="select-none hover:bg-blue-500 border border-opacity-0 hover:border-opacity-50 border-blue-300 pl-3 pr-10 py-1 rounded-md cursor-pointer before:content-['☕'] before:mr-2">
                        Buy Me A Coffee
                    </li>
                    <li className="border border-opacity-0 border-blue-300 pl-3 pr-10 py-1 text-sm font-bold before:content-['🙏'] before:mr-2">
                        Thanks for visiting!
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav
