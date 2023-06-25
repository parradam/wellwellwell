import { parseISO, isSameDay } from 'date-fns'
import { useWellnessQuery } from '../../hooks/useWellnessData'
import { sortByDate } from '../../utils/arrayUtils'
import TaskListItem from './TaskListItem'

const TaskList = () => {
    const { isLoading, isError, data } = useWellnessQuery()

    if (isLoading) return <div>Loading your tasks...</div>

    if (isError)
        return (
            <div>
                There was an error loading your tasks. Please try again soon!
            </div>
        )

    const latestWellnessData = data.sort(sortByDate).slice(-1)[0]
    const myDayCompleted = isSameDay(
        parseISO(latestWellnessData?.date),
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
        <ul className="flex flex-col gap-1">
            {tasks?.map((task) => (
                <TaskListItem key={task.title} task={task} />
            ))}
        </ul>
    )
}

export default TaskList
