import { Link } from 'react-router-dom'

function GenAIFramework() {
  return (
    <div className="px-6 sm:px-8 md:px-12 lg:px-16 pb-20">
      <div className="max-w-4xl mx-auto pt-12 sm:pt-16 md:pt-24">
        {/* Back to Work Link */}
        <div className="mb-8 sm:mb-12">
          <Link 
            to="/" 
            className="text-sm sm:text-base text-accent hover:text-accent/80 transition-colors inline-flex items-center"
          >
            ← Back to Work
          </Link>
        </div>

        {/* Hero Section */}
        <section className="mb-16 sm:mb-20 md:mb-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4 sm:mb-6">
            GenAI Text Framework
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed">
            Designing Workday's first generative AI product feature for scalable text generation across the platform
          </p>
        </section>

        {/* Main Content */}
        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {/* The Challenge */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 sm:mb-8">
              The Challenge
            </h2>
            <div className="text-base sm:text-lg text-gray-600 leading-relaxed space-y-4">
              <p>
                Workday had an internal prompt engineering tool (GenAI Studio) but no way for end users to actually experience generative AI in the product. As AI emerged in 2023, Workday needed to enter the gen AI space quickly but had no standardized pattern for how users would interact with text generation features. The framework needed to support everything from job description generation to feedback refinement to text augmentation—and integrate into any text field across Workday's form-heavy interface.
              </p>
            </div>
          </section>

          {/* My Role */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 sm:mb-8">
              My Role
            </h2>
            <div className="text-base sm:text-lg text-gray-600 leading-relaxed space-y-4">
              <p className="font-medium text-gray-900">Lead Product Designer, GenAI Text Framework (May 2023 - Mid 2025)</p>
              <p>
                I was the sole designer responsible for creating Workday's first generative AI end-user experience, including UI components, interaction framework, dev specifications, and designer documentation. I collaborated with Canvas design system team, legal for AI disclosure language, and multiple product teams (as a platform team serving internal customers). I also created comprehensive design guidance for RISING 2023 conference showcase.
              </p>
            </div>
          </section>

          {/* Process */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 sm:mb-8">
              Process
            </h2>
            <div className="text-base sm:text-lg text-gray-600 leading-relaxed space-y-4">
              <p>
                <strong>Started with exploration and competitive analysis</strong> – Volunteered to help with RISING 2023 designs while on another team because I wanted to break into AI design. Conducted competitive analysis and began raw exploration with a scrappy, fast-moving team.
              </p>
              <p>
                <strong>Key design explorations:</strong>
              </p>
            </div>

            {/* Image 1 - Components */}
            <figure className="my-6 sm:my-8">
              <img 
                src="/case-studies/genai-framework/Components.png" 
                alt="Accelerate framework components" 
                className="w-full rounded-lg shadow-sm"
              />
              <figcaption className="text-sm text-gray-500 text-center mt-3">
                Accelerate framework components: Floating AI Action Button, prompt menu, and human-in-the-loop popover
              </figcaption>
            </figure>

            <div className="text-base sm:text-lg text-gray-600 leading-relaxed space-y-4">
              <ul className="space-y-2 pl-6">
                <li className="list-disc">Document editing foundation with user confirmation</li>
                <li className="list-disc">Universal field application that could work anywhere in Workday</li>
                <li className="list-disc">Platform flexibility (what should be consistent vs. customizable)</li>
                <li className="list-disc">Summary patterns for non-editable text</li>
                <li className="list-disc">Human-in-the-loop preview popover with legal disclaimer</li>
              </ul>
              <p>
                <strong>Validation approach:</strong> Presented designs to engineering leadership and product teams. Product teams conducted user research with their end users, and we incorporated feedback to refine the framework.
              </p>
              <p>
                <strong>Execution:</strong> Moved fast with a small team, building iteratively. Started with core designs and layered in complexity over time as use cases expanded.
              </p>
            </div>
          </section>

          {/* Key Design Decisions */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 sm:mb-8">
              Key Design Decisions
            </h2>
            <div className="text-base sm:text-lg text-gray-600 leading-relaxed space-y-4">
              <p>
                <strong>1. Human-in-the-loop popover for user control</strong>
                <br />
                AI was brand new to Workday users. I designed a preview popover that appeared before any generated text was inserted, giving users an explicit review-and-confirm step beyond standard form submit. This decision was informed by Responsible AI team guidance, accessibility requirements, and Workday's form-based interaction patterns.
              </p>
            </div>

            {/* Image 2 - Popover Specifications */}
            <figure className="my-6 sm:my-8">
              <img 
                src="/case-studies/genai-framework/popover-specifications.png" 
                alt="AI Content Popover specifications" 
                className="w-full rounded-lg shadow-sm"
              />
              <figcaption className="text-sm text-gray-500 text-center mt-3">
                AI Content Popover specifications showing human-in-the-loop review workflow
              </figcaption>
            </figure>

            <div className="text-base sm:text-lg text-gray-600 leading-relaxed space-y-4">
              <p>
                <strong>2. Legal disclaimer - navigating organizational complexity</strong>
                <br />
                Coordinated between legal, Responsible AI team, and designers across Workday to establish approved disclaimer language (revised multiple times by legal). Became the go-to resource for designers implementing AI features, ensuring consistent messaging across all generative experiences.
              </p>
              <p>
                <strong>3. Designing for flexibility without concrete use cases</strong>
                <br />
                With few initial use cases but needing to support Workday's massive platform, I designed the Floating AI Action Button (FAAB) to work universally across Workday's XO (form/table-based) and bespoke experiences. Created components generic enough to fit anywhere while remaining contextually useful.
              </p>
              <p>
                <strong>4. Adapting the framework as use cases evolved</strong>
                <br />
                Originally, the FAAB, menu, and popover worked as an inseparable package to maintain human-in-the-loop control. However, new use cases emerged where the popover created redundant confirmation steps. I balanced our core principle of user control with practical UX, creating flexibility while maintaining framework integrity.
              </p>
            </div>
          </section>

          {/* Impact */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 sm:mb-8">
              Impact
            </h2>
            <div className="text-base sm:text-lg text-gray-600 leading-relaxed space-y-4">
              <p>
                <strong>Adoption & Scale:</strong>
              </p>
              <ul className="space-y-2 pl-6">
                <li className="list-disc">750+ enterprise customers using framework-powered features across 7 GA use cases</li>
                <li className="list-disc">4,000+ end users actively generating content</li>
                <li className="list-disc">Create Job Req alone: 147 tenants, 3,527 users</li>
                <li className="list-disc">10 additional use cases in various stages (2 EA, 8 in development)</li>
              </ul>
              <p>
                <strong>Customer Impact:</strong>
                <br />
                User feedback: "Very fast, easy, good information" (time savings), "Excellent starting point" for content creation, particularly valuable for users in new or unfamiliar roles
              </p>
              <p>
                <strong>Business Impact:</strong>
                <br />
                Established Workday's gen AI product foundation, enabling rapid deployment of new AI features. Created reusable component library that reduced time-to-market for subsequent AI use cases.
              </p>
            </div>

            {/* Image 3 - Button Specifications */}
            <figure className="my-6 sm:my-8">
              <img 
                src="/case-studies/genai-framework/button-specifications.png" 
                alt="FAAB component specifications" 
                className="w-full rounded-lg shadow-sm"
              />
              <figcaption className="text-sm text-gray-500 text-center mt-3">
                FAAB component specifications with anatomy and positioning guidelines
              </figcaption>
            </figure>
          </section>

          {/* What I Learned */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 sm:mb-8">
              What I Learned
            </h2>
            <div className="text-base sm:text-lg text-gray-600 leading-relaxed space-y-4">
              <p>
                I was learning everything as I went—how LLMs work, prompt engineering, how users perceive new technology. The biggest lesson: when new tech emerges, everyone is learning together. If I could do it again, I'd use live prototyping tools like Lovable to demonstrate AI interactions more effectively.
              </p>
              <p>
                <strong>Core insight:</strong> AI design is fundamentally about UX, not UI. The interface is just the surface. The real design work happens beneath: tone, response patterns, error handling, trust-building, user control.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default GenAIFramework

