import { format } from 'date-fns'
import { useWellnessQuery } from '../../hooks/useWellnessData'
import HeatmapCard from './HeatmapCard'
import { sortByDate } from '../../utils/arrayUtils'
import heatmapConfig from '../../config/heatmapConfig'

const HeatmapGrid = () => {
    const { colors, scores } = heatmapConfig

    const { isLoading, isError, data } = useWellnessQuery()

    if (isLoading) return <div>Loading your heatmap...</div>

    if (isError)
        return (
            <div>
                There was an error loading your heatmap. Please try again soon!
            </div>
        )

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4">
            {data
                .sort(sortByDate)
                .slice(-7)
                .map((cardData) => {
                    const parsedDate = new Date(cardData.date)
                    const date = format(parsedDate, 'ccc, d MMM')
                    const color = colors[cardData.score]
                    const emoji = scores.find(
                        (s) => s.rating === cardData.score
                    ).emoji
                    return (
                        <HeatmapCard
                            cardData={cardData}
                            date={date}
                            color={color}
                            emoji={emoji}
                            key={cardData._id}
                        />
                    )
                })}
        </div>
    )
}

export default HeatmapGrid
