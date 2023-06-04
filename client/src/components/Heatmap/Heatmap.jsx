import HeatmapGrid from './HeatmapGrid'

const Heatmap = () => {
    return (
        <div className="md:w-full flex flex-col gap-2">
            <div>
                <h2 className="text-2xl font-semibold">Your last week</h2>
                <p>This is how your last seven days are looking!</p>
            </div>
            <div className="p-4 border border-blue-200 rounded-md">
                <HeatmapGrid />
            </div>
        </div>
    )
}

export default Heatmap
