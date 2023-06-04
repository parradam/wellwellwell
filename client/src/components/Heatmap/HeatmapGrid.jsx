import HeatmapCard from './HeatmapCard'
import { sortByDate } from '../../utils/arrayUtils'

const HeatmapGrid = ({ data }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4">
            {data
                .sort(sortByDate)
                .slice(-7)
                .map((cardData) => (
                    <HeatmapCard cardData={cardData} key={cardData.id} />
                ))}
        </div>
    )
}

export default HeatmapGrid
