import TaskList from './TaskList'

const Tasks = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold">To do</h2>
            <div className="w-full flex flex-col gap-2">
                <p>Don{"'"}t forget to complete your tasks!</p>
                <div className="p-4 border border-blue-200 rounded-md">
                    <TaskList />
                </div>
            </div>
        </div>
    )
}

export default Tasks
