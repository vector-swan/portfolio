import { Link } from 'react-router-dom'

function ProjectCard({ title, description, link }) {
  const content = (
    <div className="bg-white border border-gray-200 rounded-lg p-8 sm:p-10 hover:border-accent/30 transition-colors">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
        {title}
      </h2>
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
        {description}
      </p>
    </div>
  )

  if (link) {
    return (
      <Link to={link} className="block">
        {content}
      </Link>
    )
  }

  return content
}

export default ProjectCard

