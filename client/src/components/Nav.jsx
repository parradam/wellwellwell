const Nav = () => {
    return (
        <div className="min-w-fit">
            <div className="bg-blue-600 text-white rounded-lg p-2 flex flex-col divide-y divide-solid divide-blue-300 divide-opacity-50 drop-shadow-md">
                <div className="border border-opacity-0 hover:border-opacity-0 border-blue-300 pl-3 pr-10 py-2 font-bold text-lg before:content-['🧭'] before:mr-2">
                    Navigation
                </div>
                <ul className="flex flex-col gap-1 px-1 py-2">
                    <li className="hover:bg-blue-500 border border-opacity-0 hover:border-opacity-50 border-blue-300 pl-3 pr-10 py-1 rounded-md cursor-pointer before:content-['📊'] before:mr-2">
                        Dashboard
                    </li>
                    <li className="hover:bg-blue-500 border border-opacity-0 hover:border-opacity-50 border-blue-300 pl-3 pr-10 py-1 rounded-md cursor-pointer before:content-['☀️'] before:mr-2">
                        Heatmap
                    </li>
                    <li className="hover:bg-blue-500 border border-opacity-0 hover:border-opacity-50 border-blue-300 pl-3 pr-10 py-1 rounded-md cursor-pointer before:content-['📈'] before:mr-2">
                        Streak
                    </li>
                    <li className="hover:bg-blue-500 border border-opacity-0 hover:border-opacity-50 border-blue-300 pl-3 pr-10 py-1 rounded-md cursor-pointer before:content-['🤗'] before:mr-2">
                        Ask for help
                    </li>
                    <li className="hover:bg-blue-500 border border-opacity-0 hover:border-opacity-50 border-blue-300 pl-3 pr-10 py-1 rounded-md cursor-pointer before:content-['🧐'] before:mr-2">
                        Privacy policy
                    </li>
                </ul>
                <ul className="flex flex-col gap-1 px-1 py-2">
                    <li className="hover:bg-blue-500 border border-opacity-0 hover:border-opacity-50 border-blue-300 pl-3 pr-10 py-1 rounded-md cursor-pointer before:content-['☕'] before:mr-2">
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
