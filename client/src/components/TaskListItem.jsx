import { Link } from 'react-router-dom'

const TaskListItem = ({ task }) => {
    return (
        <li className="font-semibold text-blue-700">
            <Link to={task.path} className="flex gap-2">
                <span>{task.status === 'done' ? '✅' : '🎯'}</span>
                <span>{task.title}</span>
                <span>{task.emoji}</span>
            </Link>
        </li>
    )
}

export default TaskListItem
