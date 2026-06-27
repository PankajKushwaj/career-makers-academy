import { useEffect, useState } from 'react'

const TOKEN_KEY = 'cma-admin-token'

export const useAuth = () => {
  const [token, setToken] = useState(() => typeof window !== 'undefined' ? localStorage.getItem(TOKEN_KEY) : null)

  useEffect(() => {
    if (token) {
      localStorage.setItem(TOKEN_KEY, token)
    } else {
      localStorage.removeItem(TOKEN_KEY)
    }
  }, [token])

  const logout = () => setToken(null)

  return { token, setToken, logout, isAuthenticated: Boolean(token) }
}
