import { useEffect, useState } from 'react'
import { fetchUsers } from '../api'
import UsersTable from '../components/UsersTable'

export default function UsersPage() {
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
            <UsersTable users={users || []} />
            {loading && <div className="mt-4 text-gray-500">Loading...</div>}
        </div>
    )
}