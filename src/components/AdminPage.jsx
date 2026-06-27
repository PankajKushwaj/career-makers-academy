import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { getApiUrl, fetchJson } from '../utils/api.js'
import { useAuth } from '../hooks/useAuth.js'
import { AdminPanel } from './AdminPanel'

export function AdminPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { token, setToken, logout, isAuthenticated } = useAuth()

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const data = await fetchJson(getApiUrl('/auth/login'), {
        method: 'POST',
        body: JSON.stringify({ username, password }),
      })

      setToken(data.token)
      setError('')
    } catch (err) {
      setError(err.message || 'Invalid username or password. Please try again.')
    }
  }

  const handleLogout = () => {
    logout()
    setUsername('')
    setPassword('')
    window.location.hash = '#home'
  }

  if (isAuthenticated) {
    return <AdminPanel token={token} onLogout={handleLogout} />
  }

  return (
    <section className="min-h-screen bg-slate-100 py-16 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.21em] text-cma-magenta dark:text-cma-yellow">
            Admin login
          </p>
          <h1 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">Protected admin access</h1>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            Sign in with your admin username and password to manage results, gallery, notices, and testimonials.
          </p>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Username
              <input
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cma-blue focus:ring-2 focus:ring-cma-blue/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                autoComplete="username"
              />
            </label>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Password
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cma-blue focus:ring-2 focus:ring-cma-blue/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                autoComplete="current-password"
              />
            </label>
            {error ? (
              <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-900/30 dark:text-red-300">
                {error}
              </p>
            ) : null}
            <button
              type="submit"
              className="w-full rounded-2xl bg-cma-blue px-4 py-3 text-sm font-semibold text-white transition hover:bg-cma-blue-dark"
            >
              Sign in
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
