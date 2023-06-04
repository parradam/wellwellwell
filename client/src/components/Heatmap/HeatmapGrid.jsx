import { format } from 'date-fns'
import { sortByDate } from '../../utils/arrayUtils'
import heatmapConfig from '../../config/heatmapConfig'

const HeatmapGrid = ({ data }) => {
    const { colors, scores } = heatmapConfig
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4">
            {data
                .sort(sortByDate)
                .slice(-7)
                .map((d) => {
                    const parsedDate = new Date(d.date)
                    return (
                        <div
                            key={d.date.toString()}
                            className={`text-lg rounded-md min-h-30 min-w-30 p-2 gap-3 flex justify-between items-start text-md font-semibold border-solid border-l-8 border-r-2 border-y-2 shadow-md cursor-pointer bg-white
                                ${colors[d.score]}
                                `}
                        >
                            <div>
                                <div className="w-full flex items-center justify-between">
                                    <span>
                                        {format(parsedDate, 'ccc, d MMM')}
                                    </span>
                                </div>
                                <div className="w-full flex flex-wrap gap-2">
                                    {d.tags &&
                                        d.tags.map((tag) => (
                                            <div key={tag} className="text-sm">
                                                <span className="font-semibold text-blue-500">
                                                    {tag}
                                                </span>
                                            </div>
                                        ))}
                                </div>
                            </div>
                            <div className="text-4xl">
                                {scores.find((s) => s.rating === d.score).emoji}
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

export default HeatmapGrid
