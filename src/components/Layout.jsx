import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'

// Layout wraps pages with a persistent header (NavBar) and Footer
export default function Layout() {
  return (
    <div className="app-root">
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
