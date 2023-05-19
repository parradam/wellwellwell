import ContentWrapper from './ContentWrapper'

const MyDay = () => {
    const scores = [1, 2, 3, 4, 5]

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted')
    }

    return (
        <ContentWrapper>
            <div>
                <h1 className="text-3xl font-bold">My day</h1>
                <p>How was your day? Let us know!</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-flow-row md:grid-flow-col">
                    <div className="flex items-center p-1">👎</div>
                    {scores.map((score) => (
                        <div key={score}>
                            <input
                                type="radio"
                                name="score"
                                id={score}
                                className="peer hidden"
                            />
                            <label
                                htmlFor={score}
                                className="block cursor-pointer select-none rounded-lg p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                            >
                                {score}
                            </label>
                        </div>
                    ))}
                    <div className="flex items-center p-1">👍</div>
                </div>
            </form>
        </ContentWrapper>
    )
}

export default MyDay
