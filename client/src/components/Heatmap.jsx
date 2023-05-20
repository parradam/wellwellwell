import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { getWellnessData } from '../api/wellness'
import heatmapConfig from '../config/heatmapConfig'

const Heatmap = () => {
    const [wellnessData, setWellnessData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await getWellnessData()
            setWellnessData(response)
        }

        fetchData()
    }, [])

    const sortByDate = (a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime()
    }

    return (
        <div className="w-full flex flex-col gap-2">
            <div>
                <h2 className="text-2xl font-semibold">Your last week</h2>
                <p>This is how your last seven days are looking!</p>
            </div>
            <div
                id="heatmap-container"
                className="p-4 border rounded-md bg-blue-50"
            >
                <div
                    id="heatmap-week"
                    className="flex flex-wrap text-sm gap-2 md:gap-4"
                >
                    {wellnessData &&
                        wellnessData
                            .sort(sortByDate)
                            .slice(-7)
                            .map((d) => {
                                const parsedDate = new Date(d.date)
                                return (
                                    <div
                                        key={d.date.toString()}
                                        className={`rounded-md w-12 h-12 md:w-20 md:h-20 hover:scale-125 transition-all delay-0 duration-200 hover:-z-0 flex flex-col justify-center items-center text-md font-semibold border-solid border-t-8 shadow-md cursor-pointer bg-white
                                ${heatmapConfig.colors[d.score]}
                                `}
                                    >
                                        <span>{format(parsedDate, 'ccc')}</span>
                                        <span>{format(parsedDate, 'd')}</span>
                                    </div>
                                )
                            })}
                </div>
            </div>
        </div>
    )
}

export default Heatmap
