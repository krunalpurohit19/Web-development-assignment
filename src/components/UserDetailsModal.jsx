export default function UserDetailsModal({ user, onClose }) {
    if (!user) return null
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center" onClick={onClose}>
            <div className="bg-white rounded-2xl shadow-lg p-6 w-[400px] max-w-full" onClick={(e) => e.stopPropagation()}>
                <div className="flex gap-4 items-center">
                    <img
                        src={user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name || user.email || 'U')}`}
                        className="w-16 h-16 rounded-full"
                        alt="avatar"
                    />
                    <div>
                        <h3 className="text-lg font-semibold">{user.name || user.email}</h3>
                        <div className="text-sm text-gray-500">{user.email}</div>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="space-y-2 text-sm">
                    <div><span className="font-medium">ID:</span> {user.id}</div>
                    <div><span className="font-medium">Created:</span> {new Date(user.createdAt).toLocaleString()}</div>
                    {user.bio && <div><span className="font-medium">Bio:</span> {user.bio}</div>}
                </div>
                <div className="flex justify-end mt-4">
                    <button
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}