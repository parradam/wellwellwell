import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <>
            <h1 className="text-3xl font-bold">Page not found</h1>
            <div className="text-9xl">😣</div>
            <p>Sorry about that.</p>
            <p>
                <Link to="/">Return to the Dashboard</Link>
            </p>
        </>
    )
}

export default ErrorPage
