import { format } from 'date-fns'
import { useWellnessQuery } from '../../hooks/useWellnessData'
import HeatmapCard from './HeatmapCard'
import { sortByDate } from '../../utils/arrayUtils'
import heatmapConfig from '../../config/heatmapConfig'
import Modal from '../Modal/Modal'
import MyDay from '../../pages/MyDay'

const HeatmapGrid = ({ editDayModalData, setEditDayModalData }) => {
    const { colors, scores } = heatmapConfig

    const { isLoading, isError, data } = useWellnessQuery()

    if (isLoading) return <div>Loading your heatmap...</div>

    if (isError)
        return (
            <div>
                There was an error loading your heatmap. Please try again soon!
            </div>
        )

    // if (data.length == 0) {
    //     return <div>Record your day by clicking 'Rate my day'!</div>
    // }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4">
                {data.length ? (
                    data
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
                        })
                ) : (
                    <>Nothing here!</>
                )}
            </div>
            <Modal
                modalData={editDayModalData}
                setModalData={setEditDayModalData}
            >
                <MyDay />
            </Modal>
        </>
    )
}

export default HeatmapGrid
