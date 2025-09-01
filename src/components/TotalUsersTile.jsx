export default function TotalUsersTile({ users }) {
    return (
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
            <div className="bg-indigo-100 rounded-full p-3 mb-3">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="4" fill="#6366f1" />
                    <path d="M4 20c0-3.314 3.134-6 7-6s7 2.686 7 6" fill="#6366f1" />
                </svg>
            </div>
            <h2 className="text-gray-700 text-4xl font-semibold mb-3 mt-3">Total Users</h2>
            <p className="text-7xl font-extrabold text-indigo-600">{users ? users.length : '—'}</p>
        </div>
    )
}