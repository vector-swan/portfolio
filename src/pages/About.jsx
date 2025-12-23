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
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
            [Bio text will be provided]
          </p>
        </div>

        {/* Contact Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm sm:text-base">
          <a 
            href="mailto:[your email]" 
            className="text-accent hover:text-accent/80 transition-colors"
          >
            Email
          </a>
          <span className="hidden sm:inline text-gray-300">|</span>
          <a 
            href="[LinkedIn link]" 
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

