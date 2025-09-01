import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="container flex items-center justify-between">
            <div className="flex items-center gap-2 py-4">
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center">U</div>
                <span className="font-semibold">User Dashboard</span>
            </div>
            <div className="flex gap-4 text-sm">
                <NavLink to="/" end className={({ isActive }) => `px-3 py-2 rounded-lg ${isActive ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:text-gray-900'}`}>Dashboard</NavLink>
                <NavLink to="/users" className={({ isActive }) => `px-3 py-2 rounded-lg ${isActive ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:text-gray-900'}`}>Users</NavLink>
            </div>
        </nav>

    )
}

export default Navbar