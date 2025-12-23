import { Link, useLocation } from 'react-router-dom'

function Navigation() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="px-6 sm:px-8 md:px-12 lg:px-16 py-8">
      <ul className="flex space-x-8 sm:space-x-12">
        <li>
          <Link 
            to="/" 
            className={`text-sm sm:text-base transition-colors ${
              isActive('/') 
                ? 'text-accent font-medium' 
                : 'text-gray-600 hover:text-accent'
            }`}
          >
            Work
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            className={`text-sm sm:text-base transition-colors ${
              isActive('/about') 
                ? 'text-accent font-medium' 
                : 'text-gray-600 hover:text-accent'
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            className={`text-sm sm:text-base transition-colors ${
              isActive('/contact') 
                ? 'text-accent font-medium' 
                : 'text-gray-600 hover:text-accent'
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation

