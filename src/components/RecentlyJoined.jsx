import { formatDateDDMMYYYY } from '../utils'


export default function RecentlyJoined({ users }) {
    const recent = [...(users || [])].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5)
    return (
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-4">Recently Joined</h3>
            <ul className="space-y-3">
                {recent.map(u => (
                    <li key={u.id} className="flex items-center gap-3">
                        <img
                            className="w-10 h-10 rounded-full"
                            src={u.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(u.name || u.email || 'U')}`}
                            alt="User Avatar" />
                        <div>
                            <div className="font-medium">{u.name || u.email}</div>
                            <div className="text-sm text-gray-500">{formatDateDDMMYYYY(u.createdAt)}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}