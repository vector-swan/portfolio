import ProjectCard from '../components/ProjectCard'

function Homepage() {
  const projects = [
    {
      title: 'Multi-Surface Agent Design',
      description: 'Design system for AI agents across web, mobile, Slack, Teams',
      link: '/multi-surface-agent'
    },
    {
      title: 'GenAI Text Framework',
      description: "Workday's first generative AI product feature",
      link: '/genai-framework'
    },
    {
      title: 'Prompt Engineering Studio',
      description: 'Internal AI tooling for product teams',
      link: '/prompt-studio'
    }
  ]

  return (
    <div className="px-6 sm:px-8 md:px-12 lg:px-16 pb-20">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto pt-12 sm:pt-16 md:pt-24 mb-20 sm:mb-24 md:mb-32">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 mb-6 sm:mb-8">
          Mia Donnell
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-accent mb-6 sm:mb-8 leading-relaxed">
          Senior Product Designer specializing in AI agents and multi-surface experiences
        </p>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
          Designing responsible, intuitive AI systems at Workday. 10+ years building products that bridge human intent and AI capabilities.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Homepage

