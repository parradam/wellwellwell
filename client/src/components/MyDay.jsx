import { useState } from 'react'
import ContentWrapper from './ContentWrapper'
import { addWellnessData } from '../api/wellness'

const MyDay = () => {
    const scores = [1, 2, 3, 4, 5]
    const [selectedScore, setSelectedScore] = useState(3)
    const [formSubmitted, setFormSubmitted] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {
            date: new Date().toISOString(),
            score: selectedScore,
        }
        try {
            await addWellnessData(data)
            setFormSubmitted(true)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <ContentWrapper>
            <div>
                <h1 className="text-3xl font-bold">My day</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2 w-min p-2 border border-blue-200 rounded-md bg-blue-50">
                    <p className="text-sm font-semibold">Rate your day</p>
                    <div className="flex md:grid-flow-col space-x-2">
                        <div className="flex justify-center items-center w-10 h-10 p-1">
                            👎
                        </div>
                        {scores.map((score) => (
                            <div key={score}>
                                <input
                                    type="radio"
                                    id={score}
                                    name="score"
                                    value={score}
                                    className="peer hidden"
                                    checked={selectedScore === score}
                                    onChange={(event) =>
                                        setSelectedScore(
                                            Number(event.target.value)
                                        )
                                    }
                                />
                                <label
                                    htmlFor={score}
                                    className="block cursor-pointer select-none w-10 h-10 rounded-lg p-2 text-center border border-blue-200 peer-checked:border-opacity-0 bg-white hover:bg-blue-100 peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                                >
                                    {score}
                                </label>
                            </div>
                        ))}
                        <div className="flex justify-center items-center w-10 h-10 p-1">
                            👍
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={formSubmitted}
                            className="rounded-lg w-28 px-4 py-2 bg-blue-500 disabled:bg-slate-400 text-sm text-white"
                        >
                            {formSubmitted ? 'Thanks! 🙏' : 'Submit'}
                        </button>
                    </div>
                </div>
            </form>
        </ContentWrapper>
    )
}

export default MyDay
