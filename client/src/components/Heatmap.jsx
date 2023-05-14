import { addDays, format } from 'date-fns'

const Heatmap = () => {
    const heatmapData = [
        { date: addDays(new Date(), -7), score: 6 },
        { date: addDays(new Date(), -6), score: 1 },
        { date: addDays(new Date(), -5), score: 4 },
        { date: addDays(new Date(), -4), score: 3 },
        { date: addDays(new Date(), -3), score: 6 },
        { date: addDays(new Date(), -2), score: 5 },
        { date: addDays(new Date(), -1), score: 8 },
    ]

    const heatmapColors = {
        0: 'bg-gray-200', // no data
        1: 'bg-red-400',
        2: 'bg-red-300',
        3: 'bg-red-200',
        4: 'bg-orange-300',
        5: 'bg-yellow-200',
        6: 'bg-green-200',
        7: 'bg-green-300',
        8: 'bg-green-400',
        9: 'bg-green-500',
        10: 'bg-green-600',
    }

    return (
        <div className="w-full flex flex-col gap-2">
            <div>
                <h2 className="text-2xl font-semibold">Heatmap</h2>
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
                    {heatmapData.map((d) => (
                        <div
                            key={d.date.toString()}
                            className={`rounded-md w-12 h-12 md:w-20 md:h-20 hover:scale-125 transition-all delay-0 duration-200 hover:-z-0 flex flex-col justify-center items-center text-md font-semibold border-solid border border-slate-300 shadow-md cursor-pointer ${
                                heatmapColors[d.score]
                            }`}
                        >
                            <span>{format(d.date, 'ccc')}</span>
                            <span>{format(d.date, 'd')}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Heatmap
