import TaskListItem from './TaskListItem'

const TaskList = ({ tasks }) => {
    return (
        <div>
            <h2 className="text-2xl font-semibold">To do</h2>
            <div className="w-full flex flex-col gap-2">
                <p>Don{"'"}t forget to complete your tasks!</p>
                <div className="p-2 border border-blue-200 rounded-md bg-blue-50">
                    <ul className="flex flex-col gap-1">
                        {tasks?.map((task) => (
                            <TaskListItem key={task.title} task={task} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TaskList
