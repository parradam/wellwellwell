const HeatmapCard = ({ cardData, date, color, emoji }) => {
    return (
        <div
            key={cardData.date.toString()}
            className={`text-lg rounded-md min-h-30 min-w-30 p-2 gap-3 flex justify-between items-start text-md font-semibold border-solid border-l-8 border-r-2 border-y-2 shadow-md transition ease-in-out delay-50 hover:shadow-lg cursor-pointer bg-white
                                ${color}
                                `}
        >
            <div>
                <div className="w-full flex items-center justify-between">
                    <span>{date}</span>
                </div>
                <div className="w-full flex flex-wrap gap-2">
                    {cardData.tags &&
                        cardData.tags.map((tag) => (
                            <div key={tag} className="text-sm">
                                <span className="font-semibold text-blue-500">
                                    {tag}
                                </span>
                            </div>
                        ))}
                </div>
            </div>
            <div className="text-4xl">{emoji}</div>
        </div>
    )
}

export default HeatmapCard
