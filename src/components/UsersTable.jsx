import { useMemo, useState } from 'react'
import UserDetailsModal from './UserDetailsModal'
import { formatDateDDMMYYYY } from '../utils'


export default function UsersTable({ users }) {
    const [page, setPage] = useState(1)
    const [q, setQ] = useState('')
    const [sortKey, setSortKey] = useState('createdAt')
    const [sortDir, setSortDir] = useState('desc')
    const [selectedUser, setSelectedUser] = useState(null)

    const perPage = 10

    const filtered = useMemo(() => {
        const term = q.trim().toLowerCase()
        let arr = users || []
        if (term) {
            arr = arr.filter(u => {
                const name = (u.name ?? '').toLowerCase();
                const email = (u.email ?? '').toLowerCase();
                return name.includes(term) || email.includes(term);
            });
        }
        arr = [...arr].sort((a, b) => {
            if (sortKey === 'name') {
                const A = a[sortKey] || '';
                const B = b[sortKey] || '';
                return sortDir === 'asc' ? String(A).localeCompare(B) : String(B).localeCompare(A);
            }
            // Always parse as Date for createdAt
            const A = new Date(a[sortKey]);
            const B = new Date(b[sortKey]);
            return sortDir === 'asc' ? A - B : B - A;
        });
        return arr
    }, [users, q, sortKey, sortDir])

    const totalPages = Math.max(1, Math.ceil((filtered.length || 0) / perPage))
    const start = (page - 1) * perPage
    const pageItems = filtered.slice(start, start + perPage)

    function goto(p) {
        if (p < 1) p = 1
        if (p > totalPages) p = totalPages
        setPage(p)
    }
    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2">
                    <input
                        className="border rounded-lg px-3 py-2"
                        placeholder="Search by name or email"
                        value={q}
                        onChange={e => { setQ(e.target.value); setPage(1) }}
                    />
                    <select
                        className="border rounded-lg px-3 py-2"
                        value={sortKey}
                        onChange={e => setSortKey(e.target.value)}
                    >
                        <option value="createdAt">Sort: Date</option>
                        <option value="name">Sort: Name</option>
                    </select>
                    <select
                        className="border rounded-lg px-3 py-2"
                        value={sortDir}
                        onChange={e => setSortDir(e.target.value)}
                    >
                        <option value="desc">Desc</option>
                        <option value="asc">Asc</option>
                    </select>
                </div>
                <div className="text-gray-500 text-sm">{filtered.length} results</div>
            </div>


            <table className="w-full border-collapse bg-white rounded-2xl shadow">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="text-left p-3">Name</th>
                        <th className="text-left p-3">Email</th>
                        <th className="text-left p-3">Joined</th>
                    </tr>
                </thead>
                <tbody>
                    {pageItems.map(u => (
                        <tr
                            key={u.id}
                            className="hover:bg-gray-50 cursor-pointer"
                            onClick={() => setSelectedUser(u)}
                        >
                            <td className="p-3 flex items-center gap-3">
                                <img
                                    src={u.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(u.name || u.email || 'U')}`}
                                    className="w-9 h-9 rounded-full"
                                    alt="Avatar"
                                />
                                <div>
                                    <div className="font-medium">{u.name || '—'}</div>
                                    <div className="text-xs text-gray-500">{u.role || ''}</div>
                                </div>
                            </td>
                            <td className="p-3">{u.email}</td>
                            <td className="p-3">{formatDateDDMMYYYY(u.createdAt)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>


            <div className="flex justify-between items-center mt-4">
                <button
                    className="px-3 py-1 border rounded-lg disabled:opacity-50"
                    onClick={() => goto(page - 1)} disabled={page <= 1}
                >
                    Prev
                </button>

                <div>Page {page} / {totalPages}</div>

                <button
                    className="px-3 py-1 border rounded-lg disabled:opacity-50"
                    onClick={() => goto(page + 1)} disabled={page >= totalPages}
                >
                    Next
                </button>
            </div>

            <UserDetailsModal user={selectedUser} onClose={() => setSelectedUser(null)} />
        </div>
    )
}