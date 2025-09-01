# User Management Dashboard

This project is part of my frontend assignment.  
It’s a small **user management dashboard** built with React, styled using Tailwind CSS, and visualized with Recharts. The goal was to practice frontend logic (search, sorting, pagination) and present data clearly in a responsive UI.

---

## ✨ Features

- 🔍 **Search**: Case-insensitive search by user name or email.
- ↕ **Sorting**: Sort users by name or by creation date (both ascending/descending).
- 📅 **Pagination**: Dynamic pagination with `goto()` function to handle page navigation safely.
- 👤 **User Management**: Create new users, edit existing ones, and preview avatar before saving.
- 📊 **Charts**:
  - Users per day (aggregated signups).
  - Signup time distribution (pie/heatmap for active hours).

---

## 🛠️ Tech Stack

- **React 18** with functional components and hooks (`useMemo`, `useState`, `useEffect`)
- **Tailwind CSS** for responsive, utility-first styling
- **Recharts** for interactive charts
- **Vite** as the build tool (fast dev server and optimized production build)

---

## 🚀 Running Locally

Clone the repo and install dependencies:

```bash
git clone https://github.com/your-username/user-management-dashboard.git
cd user-management-dashboard
npm install
npm run dev

```
