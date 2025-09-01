import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'


export default function AvatarDistributionChart({ users }) {
    const withAvatar = (users || []).filter(u => u.avatar).length
    const without = (users || []).length - withAvatar
    const data = [
        { name: 'With Avatar', value: withAvatar },
        { name: 'No Avatar', value: without }
    ]
    const COLORS = ['#10b981', '#f97316']
    return (
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">Avatar Distribution</h3>
            <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                    <Pie dataKey="value" data={data} cx="50%" cy="50%" outerRadius={80} label>
                        {data.map((entry, index) => (
                            <Cell key={index} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}