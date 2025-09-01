import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import UsersPage from './pages/UsersPage'
import Navbar from './components/Navbar'


export default function App() {
  return (
    <div className="app-shell ml-5 mr-5">
      <header className="bg-white border-b">
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </main>
    </div>
  )
}