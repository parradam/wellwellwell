import { useState } from 'react'
import ContentWrapper from '../components/ContentWrapper'
import { useAddWellnessMutation } from '../hooks/useWellnessData'
import heatmapConfig from '../config/heatmapConfig'

const MyDay = () => {
    const { scores } = heatmapConfig
    const tagLimit = 6
    const tagLength = 15

    const [selectedScore, setSelectedScore] = useState(3)
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [currentTag, setCurrentTag] = useState('')
    const [tags, setTags] = useState([])

    const addWellnessMutation = useAddWellnessMutation()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {
            date: new Date().toISOString(),
            score: selectedScore,
            tags,
        }
        try {
            addWellnessMutation.mutate(data)
            setFormSubmitted(true)
        } catch (error) {
            console.error(error)
        }
    }

    const handleTagChange = (event) => {
        setCurrentTag(event.target.value)
    }

    const isTagValid = (tag) => {
        const cleansedTag = tag.trim().toLowerCase()
        const lowercaseTags = tags.map((t) => t.toLowerCase())

        return !lowercaseTags.includes(cleansedTag)
    }

    const handleTagAdd = (event) => {
        const separators = [',', ' ', 'Tab', 'Enter']
        const trimmedTag = currentTag.trim()

        // If there is no tag in the input field, allow default behaviour on form
        if (event.key === 'Enter' && !trimmedTag.length) return

        // Otherwise, prevent Enter key from submitting
        if (
            separators.includes(event.key) &&
            trimmedTag.length &&
            isTagValid(currentTag)
        ) {
            event.preventDefault()
            setTags((prevState) => [...prevState, trimmedTag])
            setCurrentTag('')
        }
    }

    const handleTagDelete = (tagToDelete) => {
        const remainingTags = tags.filter((tag) => tag !== tagToDelete)
        setTags(remainingTags)
    }

    return (
        <ContentWrapper>
            <div>
                <h1 className="text-3xl font-bold">My day</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2 w-min p-2 border border-blue-200 rounded-md bg-blue-50">
                    <div>
                        <h2 className="text-sm font-semibold">How was it?</h2>
                        <div className="flex md:grid-flow-col space-x-2 p-2">
                            {scores.map(({ rating, emoji }) => (
                                <div key={rating}>
                                    <input
                                        type="radio"
                                        id={rating}
                                        name="score"
                                        value={rating}
                                        className="peer hidden"
                                        checked={selectedScore === rating}
                                        onChange={(event) =>
                                            setSelectedScore(
                                                Number(event.target.value)
                                            )
                                        }
                                    />
                                    <label
                                        htmlFor={rating}
                                        className="block cursor-pointer select-none w-10 h-10 rounded-lg p-2 text-center border border-blue-200 peer-checked:border-opacity-0 bg-white hover:bg-blue-100 peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                                    >
                                        {emoji}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-sm font-semibold">Tags</h2>
                        <div className="flex flex-wrap gap-2 p-2">
                            {tags.map((tag) => (
                                <div
                                    key={tag}
                                    className="text-sm p-2 rounded-lg border border-blue-200 bg-white"
                                >
                                    <span
                                        className={`font-semibold ${
                                            tag !== currentTag
                                                ? 'text-blue-500'
                                                : 'text-red-500'
                                        }`}
                                    >
                                        {tag}{' '}
                                    </span>
                                    <span
                                        onClick={() => handleTagDelete(tag)}
                                        className="cursor-pointer p-1 text-black hover:text-red-500"
                                    >
                                        ⌫
                                    </span>
                                </div>
                            ))}
                            <input
                                name="tags"
                                type="text"
                                placeholder={`Add a tag... (${tags.length}/${tagLimit})`}
                                disabled={tags.length >= tagLimit}
                                value={currentTag}
                                maxLength={tagLength}
                                size={tagLength + 2}
                                className="text-sm p-2 rounded-lg border border-blue-200"
                                onChange={handleTagChange}
                                onKeyDown={handleTagAdd}
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={formSubmitted || !isTagValid(currentTag)}
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
