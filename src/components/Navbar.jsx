import { NavLink } from 'react-router-dom'

// Navigation bar — top-level site navigation
export default function NavBar() {
  return (
    <nav className="nav">
      <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} end>
        Home
      </NavLink>
      <NavLink to="/projects" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
        Projects
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
        Contact
      </NavLink>
    </nav>
  )
}
