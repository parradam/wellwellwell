import { formatDistance } from 'date-fns'

const Profile = () => {
    const user = {
        username: 'adam12',
        email: 'email@email.com',
        date_joined: new Date(2023, 6, 1),
    }
    const { username, email, date_joined } = user
    const parsedJoined = new Date(date_joined)
    const formattedJoined = formatDistance(parsedJoined, new Date(), {
        addSuffix: true,
    })

    return (
        <div>
            <h1 className="text-3xl font-bold">{username}&apos;s profile</h1>
            <ul>
                {email && (
                    <li>
                        <span className="font-semibold">Email: </span>
                        {email}
                    </li>
                )}
                <li>
                    <span className="font-semibold">Joined: </span>
                    {formattedJoined}
                </li>
            </ul>
        </div>
    )
}

export default Profile
