const API_BASE_URL = import.meta.env.VITE_API_URL || '/api'

export const getApiUrl = (path) => `${API_BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`

export const authHeaders = (token) => ({
  Authorization: token ? `Bearer ${token}` : undefined,
})

export const fetchJson = async (url, options = {}) => {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  })

  if (!response.ok) {
    const data = await response.json().catch(() => null)
    const error = new Error(data?.message || 'Request failed')
    error.status = response.status
    error.details = data
    throw error
  }

  return response.json().catch(() => null)
}
