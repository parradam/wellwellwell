import { format } from 'date-fns'
import heatmapConfig from '../config/heatmapConfig'
import { useWellnessData } from '../hooks/useWellnessData'

const Heatmap = () => {
    const { isLoading, isError, data } = useWellnessData()

    const sortByDate = (a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime()
    }

    if (isLoading) return 'Loading...'

    if (isError) return 'An error occurred. Please try again.'

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
                    className="grid grid-cols-2 grid-flow-row text-sm gap-4"
                >
                    {data &&
                        data
                            .sort(sortByDate)
                            .slice(-7)
                            .map((d) => {
                                const parsedDate = new Date(d.date)
                                return (
                                    <div
                                        key={d.date.toString()}
                                        className={`rounded-md min-h-30 min-w-30 hover:scale-125 transition-all delay-0 duration-200 hover:-z-0 flex flex-col justify-start items-center text-md font-semibold border-solid border-t-8 shadow-md cursor-pointer bg-white
                                ${heatmapConfig.colors[d.score]}
                                `}
                                    >
                                        <span>{format(parsedDate, 'ccc')}</span>
                                        <span>{format(parsedDate, 'd')}</span>
                                        <div className="flex flex-wrap gap-2 p-2">
                                            {d.tags &&
                                                d.tags.map((tag) => (
                                                    <div
                                                        key={tag}
                                                        className="text-sm p-1 bg-white"
                                                    >
                                                        <span className="font-semibold text-blue-500">
                                                            {tag}
                                                        </span>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                )
                            })}
                </div>
            </div>
        </div>
    )
}

export default Heatmap
