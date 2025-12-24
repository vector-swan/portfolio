import { Link } from 'react-router-dom'

function MultiSurfaceAgent() {
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
            Multi-Surface Agent Design
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed">
            Establishing design consistency for Workday's first AI agent across web, mobile, Slack, Teams, and Sana
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
                Workday's Self-Service Agent needed to launch across web, mobile, Slack, Teams, and Sana (newly acquired). Each surface had separate development teams and designers working in silos with no coordination. Without alignment, users would experience inconsistent AI interactions depending on where they accessed the agent—undermining trust and usability.
              </p>
            </div>
          </section>

          {/* My Role */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 sm:mb-8">
              My Role
            </h2>
            <div className="text-base sm:text-lg text-gray-600 leading-relaxed space-y-4">
              <p className="font-medium text-gray-900">Lead Designer, Self-Service Agent</p>
              <p>
                I was responsible for ensuring design consistency across all surfaces for Workday's first multi-surface AI agent. After the dedicated team was deprioritized, I partnered with my manager to coordinate 5 designers across 4 product teams. My work focused on establishing shared design standards, creating visual documentation, setting deadlines, and facilitating cross-team alignment.
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
                <strong>Established baseline documentation</strong> – Started by auditing all agent components already defined in our web design system.
              </p>
              <p>
                <strong>Created collaborative tracking system</strong> – Built a Google Sheet to track component status, then created a Miro grid where designers could visually see what was designed, missing, or N/A for each surface.
              </p>
            </div>
            
            {/* Image 1 - Tracking System */}
            <figure className="my-6 sm:my-8">
              <img 
                src="/case-studies/multi-surface-agent/multi-surface-tracking-system.png" 
                alt="Cross-surface component tracking system" 
                className="w-full rounded-lg shadow-sm"
              />
              <figcaption className="text-sm text-gray-500 text-center mt-3">
                Cross-surface component tracking system showing alignment across Web, Mobile, Slack, Teams, and Sana
              </figcaption>
            </figure>

            <div className="text-base sm:text-lg text-gray-600 leading-relaxed space-y-4">
              <p>
                <strong>Facilitated rapid alignment</strong> – With only 1 month before agent launch (during our RISING conference), I ran focused sync meetings and set realistic expectations—directional designs, not perfection.
              </p>
              <p>
                <strong>Made progress visible</strong> – Each designer updated artifacts as they completed work. I maintained regular check-ins with leadership to show cross-team progress.
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
                <strong>Managing deadlines under pressure</strong> – Balanced leadership's need for commitments with designers' anxiety about overpromising. Created psychological safety by emphasizing progress over perfection.
              </p>
              <p>
                <strong>Resolving resource constraints</strong> – When one designer was overloaded, I de-escalated and worked with my manager to secure additional support.
              </p>
              <p>
                <strong>Rapid Sana integration</strong> – After Workday acquired Sana, I secured early access to document their agent patterns while teams were still integrating systems.
              </p>
              <p>
                <strong>Building sustainable systems</strong> – Created self-service infrastructure (Slack channel, Miro grids, regular check-ins) so designers could work asynchronously.
              </p>
            </div>
          </section>

          {/* Impact */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 sm:mb-8">
              Impact
            </h2>
            <div className="text-base sm:text-lg text-gray-600 leading-relaxed space-y-3">
              <ul className="space-y-3 pl-6">
                <li className="list-disc">Achieved cross-surface design alignment in 1 month despite resource constraints</li>
                <li className="list-disc">Enabled Self-Service Agent launch in early adopter program (30+ enterprise customers)</li>
                <li className="list-disc">Created visual coordination system now used as ongoing reference for multi-surface consistency</li>
              </ul>
            </div>

            {/* Image 2 - Guidelines */}
            <figure className="my-6 sm:my-8">
              <img 
                src="/case-studies/multi-surface-agent/Guidelines.png" 
                alt="AI card component guidelines" 
                className="w-full rounded-lg shadow-sm"
              />
              <figcaption className="text-sm text-gray-500 text-center mt-3">
                AI card component guidelines establishing consistent patterns across all surfaces
              </figcaption>
            </figure>

            {/* Image 3 - Examples */}
            <figure className="my-6 sm:my-8">
              <img 
                src="/case-studies/multi-surface-agent/Examples.png" 
                alt="AI card components in context" 
                className="w-full rounded-lg shadow-sm"
              />
              <figcaption className="text-sm text-gray-500 text-center mt-3">
                AI card components in context across different Workday surfaces
              </figcaption>
            </figure>

            <div className="text-base sm:text-lg text-gray-600 leading-relaxed space-y-3">
              <ul className="space-y-3 pl-6">
                <li className="list-disc">Currently building comprehensive agent guidelines covering error states, response types, and trust-building patterns</li>
                <li className="list-disc">Coordination model is now standard approach for multi-surface agent design at Workday</li>
              </ul>
            </div>
          </section>

          {/* What I Learned */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 sm:mb-8">
              What I Learned
            </h2>
            <div className="text-base sm:text-lg text-gray-600 leading-relaxed space-y-4">
              <p>
                Clear communication is always critical, but especially when coordinating stressed teams under tight deadlines. While I thought I was being clear about expectations, I learned that over-communicating scope and flexibility prevents panic.
              </p>
              <p>
                Agents represent a new design paradigm—they're not traditional UI components but rather experience layers that span multiple surfaces. This project taught me that grounding abstract AI experiences in visual consistency helps teams align on something tangible before diving into complexity.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default MultiSurfaceAgent

