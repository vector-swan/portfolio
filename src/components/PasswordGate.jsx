import { useState, useEffect } from 'react'

const CORRECT_PASSWORD = 'mdonnell2025'

function PasswordGate({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is already authenticated in session storage
    const authStatus = sessionStorage.getItem('portfolio_authenticated')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (password === CORRECT_PASSWORD) {
      sessionStorage.setItem('portfolio_authenticated', 'true')
      setIsAuthenticated(true)
    } else {
      setError('Incorrect password. Please try again.')
      setPassword('')
    }
  }

  // Show loading state while checking session storage
  if (isLoading) {
    return null
  }

  // Show password gate if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Mia Donnell
            </h1>
            <p className="text-lg text-gray-600">
              Portfolio Access
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label 
                htmlFor="password" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setError('')
                }}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-base"
                placeholder="Enter password"
                autoFocus
              />
              {error && (
                <p className="mt-2 text-sm text-red-600">
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-white py-3 px-6 rounded-lg font-medium hover:bg-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    )
  }

  // User is authenticated, show the app
  return children
}

export default PasswordGate

