import TaskListItem from './TaskListItem'

const TaskList = ({ tasks }) => {
    return (
        <ul className="flex flex-col gap-1">
            {tasks?.map((task) => (
                <TaskListItem key={task.title} task={task} />
            ))}
        </ul>
    )
}

export default TaskList
