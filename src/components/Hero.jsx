import React from 'react'

// Hero — landing section with name, title, intro, and CTA buttons
const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-indigo-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 tracking-wide uppercase">
          Available for opportunities
        </span>

        {/* Name */}
        <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
          Deepak <span className="text-indigo-600 dark:text-indigo-400">Chaudhary</span>
        </h1>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-500 dark:text-gray-400 mb-6">
          Full Stack .NET Developer
        </h2>

        {/* Short intro */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
          3+ years building scalable web applications with{' '}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">ASP.NET Core</span>,{' '}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">C#</span>,{' '}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">SQL Server</span>,{' '}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">Angular</span> &{' '}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">React</span>.
          Passionate about clean architecture, performance-driven APIs, and ML integration.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors shadow-md text-sm sm:text-base"
          >
            Contact Me
          </a>
          <a
            href="/Deepak_Chaudhary_Software_Developer.pdf"
            download="Deepak_Chaudhary_Resume.pdf"
            className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold transition-colors text-sm sm:text-base"
          >
            Download Resume ↓
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <a href="#about" className="animate-bounce text-gray-400 dark:text-gray-500" aria-label="Scroll down">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
