import { Link } from 'react-router-dom'
import ContentWrapper from '../components/ContentWrapper'

const ErrorPage = () => {
    return (
        <ContentWrapper>
            <h1 className="text-3xl font-bold">Page not found</h1>
            <div className="text-9xl">😣</div>
            <p>Sorry about that.</p>
            <p>
                <Link to="/dashboard">Return to the Dashboard</Link>
            </p>
        </ContentWrapper>
    )
}

export default ErrorPage
