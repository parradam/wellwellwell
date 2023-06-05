import { parseISO, isSameDay } from 'date-fns'
import { sortByDate } from '../../utils/arrayUtils'
import { useWellnessQuery } from '../../hooks/useWellnessData'
import TaskList from './TaskList'

const Tasks = () => {
    const { isLoading, isError, data } = useWellnessQuery()

    if (isLoading) return 'Loading...'

    if (isError) return 'An error occurred. Please try again.'

    const latestWellnessData = data.sort(sortByDate).slice(-1)[0]
    const myDayCompleted = isSameDay(
        parseISO(latestWellnessData.date),
        new Date()
    )

    const tasks = [
        {
            title: 'Record how you feel',
            complete: myDayCompleted,
            path: '/my-day',
            emoji: '🎗',
        },
        {
            title: 'An incomplete task',
            complete: false,
            path: '/my-day',
            emoji: '🤯',
        },
    ]

    return (
        <div>
            <h2 className="text-2xl font-semibold">To do</h2>
            <div className="w-full flex flex-col gap-2">
                <p>Don{"'"}t forget to complete your tasks!</p>
                <div className="p-2 border border-blue-200 rounded-md">
                    <TaskList tasks={tasks} />
                </div>
            </div>
        </div>
    )
}

export default Tasks
