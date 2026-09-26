import React from 'react'

// Stat tile helper component
const StatTile = ({ value, label }) => (
  <div className="flex flex-col items-center p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl">
    <span className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">{value}</span>
    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1 text-center">{label}</span>
  </div>
)

// About — bio, IMServ mention, stat tiles
const About = () => {
  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">About Me</h2>
          <div className="mt-2 mx-auto h-1 w-16 bg-indigo-600 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Bio text */}
          <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-base">
            <p>
              Hi! I'm <span className="font-semibold text-gray-900 dark:text-white">Deepak Chaudhary</span>, a Full Stack
              .NET Developer with over <strong>3 years of professional experience</strong> building cloud-ready,
              production-grade web applications.
            </p>
            <p>
              At <strong>EXL</strong>, I work on{' '}
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">IMServ</span> — an ML-powered
              email intelligence platform that automates email classification, enabling intelligent dashboards
              and seamless API integrations to streamline business workflows.
            </p>
            <p>
              I thrive in cross-functional teams, writing clean, maintainable code across the entire stack —
              from crafting efficient REST APIs and stored procedures on the backend to building intuitive UIs
              with Angular and React on the frontend. I'm also actively involved in mentoring junior developers
              and deploying services on Linux environments.
            </p>
          </div>

          {/* Stat tiles */}
          <div className="grid grid-cols-3 gap-4">
            <StatTile value="3+" label="Years Experience" />
            <StatTile value="500+" label="DSA Problems Solved" />
            <StatTile value="3⭐" label="CodeChef Rating" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
