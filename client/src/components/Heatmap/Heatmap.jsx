import { useWellnessQuery } from '../../hooks/useWellnessData'
import HeatmapGrid from './HeatmapGrid'

const Heatmap = () => {
    const { isLoading, isError, data } = useWellnessQuery()

    if (isLoading) return 'Loading...'

    if (isError) return 'An error occurred. Please try again.'

    return (
        <div className="md:w-full flex flex-col gap-2">
            <div>
                <h2 className="text-2xl font-semibold">Your last week</h2>
                <p>This is how your last seven days are looking!</p>
            </div>
            <div className="p-4 border rounded-md bg-blue-50">
                {data && <HeatmapGrid data={data} />}
            </div>
        </div>
    )
}

export default Heatmap
