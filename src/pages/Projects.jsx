import { useSelector } from 'react-redux'

// Projects page — lists projects from the Redux store
export default function Projects() {
  const projects = useSelector((state) => state.projects.items)

  return (
    <section>
      <h1>Projects</h1>
      <ul className="projects-list">
        {projects.map((p) => (
          <li key={p.id} className="project-item">
            <strong>{p.title}</strong>
            <div>{p.description}</div>
            {p.link && (
              <div>
                <a href={p.link}>View project</a>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
