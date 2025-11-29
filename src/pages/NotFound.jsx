import { Link } from 'react-router-dom'

// 404 page for undefined routes
export default function NotFound() {
  return (
    <section>
      <h1>404 — Page Not Found</h1>
      <p>Sorry, we couldn't find the page you were looking for.</p>
      <p>
        <Link to="/">Go back home</Link>
      </p>
    </section>
  )
}
