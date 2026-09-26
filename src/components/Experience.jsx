import React from 'react'

// Experience achievements list
const achievements = [
  'Designed and built performant REST APIs consumed by frontend clients and third-party systems.',
  'Designed database schemas and wrote optimized stored procedures for high-volume data processing.',
  'Integrated ML models into the platform pipeline for real-time email classification at scale.',
  'Deployed and managed application services on Linux servers (Ubuntu) using Bash scripts.',
  'Mentored junior developers through code reviews, pair programming, and technical guidance.',
  'Collaborated in Agile sprints — participated in planning, daily standups, and retrospectives.',
]

// Experience section
const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Experience</h2>
          <div className="mt-2 mx-auto h-1 w-16 bg-indigo-600 rounded-full" />
        </div>

        {/* Timeline card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 sm:p-8 shadow-sm">
            {/* Company + role */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Software Developer</h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-semibold mt-0.5">EXL</p>
              </div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 self-start sm:self-auto">
                Oct 2023 – Present
              </span>
            </div>

            {/* Divider */}
            <hr className="border-gray-100 dark:border-gray-700 mb-6" />

            {/* Achievement bullet list */}
            <ul className="space-y-3">
              {achievements.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {/* Bullet dot */}
                  <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-indigo-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
