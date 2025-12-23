function Contact() {
  return (
    <div className="px-6 sm:px-8 md:px-12 lg:px-16 pb-20">
      <div className="max-w-2xl mx-auto pt-12 sm:pt-16 md:pt-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-12 sm:mb-16">
          Contact
        </h1>
        
        <div className="space-y-6 sm:space-y-8">
          <div>
            <p className="text-sm sm:text-base text-gray-500 mb-2">Email</p>
            <a 
              href="mailto:miaddonnell@gmail.com" 
              className="text-lg sm:text-xl text-accent hover:text-accent/80 transition-colors"
            >
              miaddonnell@gmail.com
            </a>
          </div>
          
          <div>
            <p className="text-sm sm:text-base text-gray-500 mb-2">LinkedIn</p>
            <a 
              href="https://www.linkedin.com/in/miadonnell" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg sm:text-xl text-accent hover:text-accent/80 transition-colors"
            >
              linkedin.com/in/miadonnell
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

