import { Link } from 'react-router-dom'

function PromptStudio() {
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
            Prompt Engineering Studio (GenAI Studio)
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed">
            Designing Workday's first internal platform for end-to-end prompt development, enabling 2,000+ developers to build and ship AI features
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
                In 2023, as generative AI became critical for product differentiation, Workday leadership recognized that shipping AI features at scale would create a bottleneck. Engineers were creating prompts ad-hoc with no standardized workflow, threatening consistency across Workday's platform.
              </p>
              <p>
                Workday's enterprise complexity—technical debt, approval processes, interconnected services—meant that shipping a single AI feature required coordinating multiple systems and teams. Without centralized tooling, each product team would reinvent the wheel, creating fragmentation and slowing time-to-market.
              </p>
              <p>
                The vision was to create an end-to-end platform where product managers could build, test, and ship prompts without deep technical knowledge, while maintaining Workday's standards and streamlining complex backend coordination. This would democratize AI development and enable rapid, consistent deployment of generative AI features.
              </p>
            </div>
          </section>

          {/* My Role */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 sm:mb-8">
              My Role
            </h2>
            <div className="text-base sm:text-lg text-gray-600 leading-relaxed space-y-4">
              <p className="font-medium text-gray-900">Lead Product Designer, GenAI Studio (May/June 2023 - Mid 2024)</p>
              <p>
                I was the sole designer on this project, responsible for transforming an engineering sandbox into a user-friendly internal product. Started with a scrappy team of 3 (Director + 2 engineers) that grew to 20+ across Boulder and Seattle locations, eventually including a PM, full-stack engineers, and 2 engineering managers.
              </p>
              <p>
                <strong>Responsibilities:</strong>
              </p>
              <ul className="space-y-2 pl-6">
                <li className="list-disc">Redesigned existing engineering prototype for usability</li>
                <li className="list-disc">Defined product features and roadmap alongside leadership</li>
                <li className="list-disc">Created end-to-end workflows for prompt development lifecycle</li>
                <li className="list-disc">Designed for both PM (non-technical) and engineer (technical) users</li>
              </ul>
              <p>
                This project launched immediately after RISING 2023, when the engineering team had built a basic sandbox. My job was to make it production-ready and accessible to non-technical users.
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
                <strong>Started with technical discovery</strong> – With few existing prompt engineering tools available in 2023, I learned by using ChatGPT extensively and conducting deep technical conversations with engineers to understand how LLMs worked and how that complexity should translate to the UI. Had to design for PMs who were technical but not at engineer-level.
              </p>
              <p>
                <strong>Designed core prompt building features:</strong>
              </p>
              <ol className="space-y-3 pl-6 list-decimal">
                <li>
                  <strong>Prompt builder with segments</strong> – Created structured fields for context, action, and examples. Navigated complexity around different LLM capabilities (some models supported segmentation, others didn't) and evolving prompt engineering best practices.
                </li>
                <li>
                  <strong>Variables system</strong> – Enabled reusable prompts with dynamic data fields. For example, a job requisition prompt could include variables for role, title, location, and past descriptions. Engineers could then pull real data into these variables when deploying.
                </li>
                <li>
                  <strong>Preview in end-user context</strong> – Allowed users to see their prompt in a realistic environment (e.g., document editor). Critical for storytelling when "prompt engineering" wasn't a known term—helped stakeholders understand why the tool was needed.
                </li>
                <li>
                  <strong>Version history</strong> – Users could view previous prompt versions and edits, and restore earlier versions.
                </li>
                <li>
                  <strong>Evaluation framework</strong> – Designed interface for setting up human evaluation criteria to test prompt quality.
                </li>
                <li>
                  <strong>Deploy instructions</strong> – Created handoff area giving engineers everything needed to deploy prompts to test or production environments.
                </li>
              </ol>
            </div>

            {/* Image 1 - Compose */}
            <figure className="my-6 sm:my-8">
              <img 
                src="/case-studies/prompt-studio/compose.png" 
                alt="GenAI Studio interface" 
                className="w-full rounded-lg shadow-sm"
              />
              <figcaption className="text-sm text-gray-500 text-center mt-3">
                GenAI Studio interface showing variables panel, prompt segments (Context, Action, Example), and real-time output
              </figcaption>
            </figure>

            <div className="text-base sm:text-lg text-gray-600 leading-relaxed space-y-4">
              <p>
                <strong>Established workflow through journey mapping:</strong> Since PMs hadn't done this before, we mapped the complete journey with engineering input: PM starts with feature idea → creates prompt (optionally from template) → tests iteratively in studio → engineer deploys to test environment → engineer refines for formatting/optimization → ship to production (with optional user testing).
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
                <strong>1. New collaboration model: Engineers prototype first</strong>
                <br />
                Understanding LLM evaluation systems was difficult—I hadn't worked with them in a code environment like the engineers had. Rather than struggle with wireframes for concepts I didn't fully grasp, one engineer used v0 to create a functional prototype showing how evaluations could work. Seeing the functionality first became a breakthrough approach. While this might seem "backwards" (engineers first, designers second), modern prototyping tools made it faster and more effective than traditional wireframing for highly technical features I was still learning.
              </p>
              <p>
                <strong>2. Making prompt engineering accessible to non-technical users</strong>
                <br />
                Working with our PM, we recognized it took us months to understand prompt engineering—we needed to accelerate that learning curve for other PMs. The challenge was balancing technical requirements (engineers wanted granular controls for prompt success) with PM reality (the prompt was just one more task, not their primary focus). Through research with product teams, we learned PMs needed simplicity that might require some explanation but wouldn't disrupt their workflow.
              </p>
            </div>

            {/* Image 2 - Variables */}
            <figure className="my-6 sm:my-8">
              <img 
                src="/case-studies/prompt-studio/variables.png" 
                alt="Variables system" 
                className="w-full rounded-lg shadow-sm"
              />
              <figcaption className="text-sm text-gray-500 text-center mt-3">
                Variables system allowing PMs to create reusable prompts with dynamic data fields
              </figcaption>
            </figure>

            <div className="text-base sm:text-lg text-gray-600 leading-relaxed space-y-4">
              <p>
                <strong>3. Variables system</strong> – Enabled reusable prompts with dynamic data fields. For example, a job requisition prompt could include variables for role, title, location, and past descriptions. Engineers could then pull real data into these variables when deploying.
              </p>
              <p>
                <strong>4. Balancing technical depth with usability</strong>
                <br />
                Opinionated engineers felt certain technical "levers" were essential for successful prompts. Through user research and prototype testing with PMs, I identified which technical elements were truly necessary versus engineer preferences. Designed an interface that exposed critical controls while hiding complexity that would overwhelm non-technical users.
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
                <strong>Adoption & Usage:</strong>
              </p>
              <ul className="space-y-2 pl-6">
                <li className="list-disc">2,000+ Workday developers utilized the platform</li>
                <li className="list-disc">450 unique active users (30-day period)</li>
                <li className="list-disc">3,808 prompt generations in 30 days</li>
                <li className="list-disc">34% weekly active user stickiness (exceeding SaaS benchmarks—13% average, 25%+ is "great")</li>
              </ul>
              <p>
                <strong>Innovation Enablement:</strong>
              </p>
              <ul className="space-y-2 pl-6">
                <li className="list-disc">Supported 250+ hackathon projects across all Workday product areas</li>
                <li className="list-disc">Democratized AI experimentation—lowered barrier to entry for non-technical users to build and test AI features</li>
                <li className="list-disc">Enabled rapid prototyping of AI concepts company-wide</li>
              </ul>
            </div>

            {/* Image 3 - Prompt Library */}
            <figure className="my-6 sm:my-8">
              <img 
                src="/case-studies/prompt-studio/prompt-library.png" 
                alt="Prompt template library" 
                className="w-full rounded-lg shadow-sm"
              />
              <figcaption className="text-sm text-gray-500 text-center mt-3">
                Prompt template library helping PMs get started quickly with pre-built prompts organized by use case
              </figcaption>
            </figure>

            <div className="text-base sm:text-lg text-gray-600 leading-relaxed space-y-4">
              <p>
                <strong>Enabled the GenAI Framework:</strong>
                <br />
                GenAI Studio became the backend infrastructure for the text generation framework, giving teams a centralized place to create, test, store, and deploy prompts. This end-to-end workflow reduced time-to-market for AI features that now serve 750+ enterprise customers.
              </p>
              <p>
                <strong>Why it was deprioritized (and why that's actually positive):</strong>
                <br />
                In 2024, Workday's senior leadership determined that AI agents would be more business-critical than standalone generative AI features. Because the GenAI Studio team was the only team at Workday that had successfully shipped AI products, they were reassigned to build Workday's Self-Service Agent—the company's highest-priority AI initiative.
              </p>
              <p>
                <strong>Current state:</strong>
                <br />
                The tool remains available and functional for teams building prompts, though it's no longer actively developed. The framework it enabled continues to be supported by a new team.
              </p>
              <p>
                <strong>What this demonstrates:</strong>
                <br />
                Building internal tooling that achieves enterprise-wide adoption (2,000+ developers), enabling organizational innovation at scale, and delivering work so effectively that the team gets pulled into the company's highest-priority initiatives.
              </p>
            </div>
          </section>

          {/* What I Learned */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 sm:mb-8">
              What I Learned
            </h2>
            <div className="text-base sm:text-lg text-gray-600 leading-relaxed space-y-4">
              <p>
                Not everyone shared my enthusiasm for AI—and that was critical to understand. PMs didn't want to become prompt engineering experts; they just wanted to complete their task efficiently. This insight shaped our design philosophy: simplicity over technical depth.
              </p>
              <p>
                <strong>My biggest disappointment:</strong> I designed a prompt generator that would let PMs upload their PRD and examples to auto-generate a starting prompt. I pushed for this feature from the beginning, believing it would dramatically accelerate prompt creation and improve quality. Leadership never approved it. Looking back, this would have been transformative.
              </p>
              <p>
                <strong>What this taught me:</strong> Deep understanding of how LLMs work—what they're good at, their limitations, and how to design effective prompts. More importantly, it reinforced my belief that AI should handle mundane tasks so humans can focus on creative, meaningful work. This project set me on a path to specialize in making AI a tool that empowers rather than replaces.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PromptStudio

