import { useMemo } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts'
import { formatDateDDMMYYYY, lastNDays } from '../utils'

const getLocalDateString = (dateObj) =>
    dateObj.getFullYear() + '-' +
    String(dateObj.getMonth() + 1).padStart(2, '0') + '-' +
    String(dateObj.getDate()).padStart(2, '0');

const aggregatePerDay = (users) => {
    const counts = users.reduce((acc, user) => {
        if (!user.createdAt) return acc;
        try {
            const dateObj = new Date(user.createdAt);
            if (isNaN(dateObj)) return acc;
            const day = getLocalDateString(dateObj);
            acc[day] = (acc[day] || 0) + 1;
        } catch {
            console.warn("Invalid date:", user.createdAt);
        }
        return acc;
    }, {});

    // Get last 30 days as local date strings
    const days = lastNDays(30).map(getLocalDateString);
    // Merge counts with days, fill missing with zero
    return days.map(date => ({
        date,
        count: counts[date] || 0,
    }));
};

export default function UsersPerDayChart({ users }) {
    const data = useMemo(() => aggregatePerDay(users), [users])
    return (
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">Users Created (Last 30 days)</h3>
            <ResponsiveContainer width="100%" height={260}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="date"
                        tickFormatter={formatDateDDMMYYYY}
                    />
                    <YAxis />
                    <Tooltip
                        labelFormatter={formatDateDDMMYYYY}
                    />
                    <Line type="monotone" dataKey="count" stroke="#4f46e5" strokeWidth={2} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
