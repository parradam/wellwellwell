import { formatDistance } from 'date-fns'
import { useProfileQuery } from '../../hooks/useCheckAuth'

const Profile = () => {
    const { isLoading, isError, data } = useProfileQuery()

    if (isLoading) return <div>Loading your profile...</div>

    if (isError)
        return (
            <div>
                There was an error loading your profile. Please try again soon!
            </div>
        )

    const { username, email, createdAt } = data
    const parsedJoined = new Date(createdAt)
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
