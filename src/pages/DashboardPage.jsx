import { useEffect, useState } from 'react'
import { fetchUsers } from '../api'
import TotalUsersTile from '../components/TotalUsersTile'
import UsersPerDayChart from '../components/UsersPerDayChart'
import AvatarDistributionChart from '../components/AvatarDistributionChart'
import RecentlyJoined from '../components/RecentlyJoined'


export default function DashboardPage() {
    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    useEffect(() => {
        let mounted = true
        async function load() {
            try {
                setLoading(true)
                const data = await fetchUsers()
                if (mounted) setUsers(data)
            } catch (err) {
                setError(err.message)
            } finally { setLoading(false) }
        }
        load()
        return () => { mounted = false }
    }, [])


    return (
        <div className="max-w-6xl mx-auto p-6">
            {error && <div className="p-4 bg-red-50 text-red-600 rounded-lg mb-4">{error}</div>}

            <div className="grid md:grid-cols-3 gap-6 mb-6">
                <TotalUsersTile users={users || []} />
                <UsersPerDayChart users={users || []} />
                <AvatarDistributionChart users={users || []} />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <RecentlyJoined users={users || []} />
            </div>

            {loading && <div className="mt-4 text-gray-500">Loading...</div>}
        </div>
    )
}