import Router from './routes/Router'
import Auth from './components/Auth/Auth'

const App = () => {
    let user
    user = {
        username: 'adam',
    }

    user = null

    if (user)
        return (
            <div className="overflow-hidden">
                <Router />
            </div>
        )
    return <Auth />
}

export default App
