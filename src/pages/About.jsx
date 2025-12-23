function About() {
  return (
    <div className="px-6 sm:px-8 md:px-12 lg:px-16 pb-20">
      <div className="max-w-3xl mx-auto pt-12 sm:pt-16 md:pt-24">
        {/* Photo Placeholder */}
        <div className="mb-12 sm:mb-16 flex justify-center">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gray-200 rounded-full"></div>
        </div>

        {/* Bio Section */}
        <div className="mb-12 sm:mb-16">
          <div className="text-base sm:text-lg text-gray-600 leading-relaxed space-y-6">
            <p>
              I'm a Senior Product Designer with 10+ years of experience, focused on AI-first design since 2023.
            </p>
            <p>
              At Workday, I led the creation of GenAI Studio, established company-wide AI/UX standards, and designed cross-platform patterns for multi-agent orchestration across web, mobile, Slack, and Microsoft Teams.
            </p>
            <p>
              I believe the future of UX lies in making AI understandable, trustworthy, and genuinely useful through thoughtful systems design and human-centered AI interactions.
            </p>
            <p>
              When I'm not designing, you'll find me at a Toastmasters meeting, taking a ballet class, or hiking with my husband and our toy poodle.
            </p>
          </div>
        </div>

        {/* Contact Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm sm:text-base">
          <a 
            href="mailto:miaddonnell@gmail.com" 
            className="text-accent hover:text-accent/80 transition-colors"
          >
            Email
          </a>
          <span className="hidden sm:inline text-gray-300">|</span>
          <a 
            href="https://www.linkedin.com/in/miadonnell" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}

export default About

