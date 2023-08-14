import { useState } from 'react'
import HeatmapGrid from './HeatmapGrid'

const Heatmap = () => {
    const [editDayModalData, setEditDayModalData] = useState()

    return (
        <div className="md:w-full flex flex-col gap-2">
            <div>
                <h2 className="text-2xl font-semibold">Your last week</h2>
                <p>This is how your last seven days are looking!</p>

                <button
                    className="my-2 rounded-lg min-w-28 px-4 py-2 disabled:bg-slate-400 text-sm bg-blue-500 font-bold text-white hover:bg-blue-600"
                    onClick={() => setEditDayModalData({})}
                >
                    Rate my day
                </button>
            </div>
            <div className="p-4 border border-blue-200 rounded-md">
                <HeatmapGrid
                    editDayModalData={editDayModalData}
                    setEditDayModalData={setEditDayModalData}
                />
            </div>
        </div>
    )
}

export default Heatmap
