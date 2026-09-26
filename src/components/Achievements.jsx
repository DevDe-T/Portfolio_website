import React from 'react'

// Achievement data
const achievementList = [
  {
    icon: '🏆',
    title: 'CodeChef 3-Star Coder',
    description:
      'Achieved a 3-star rating on CodeChef through consistent competitive programming participation and contest performance.',
  },
  {
    icon: '💡',
    title: '500+ DSA Problems Solved',
    description:
      'Solved over 500 Data Structures & Algorithms problems across LeetCode, CodeChef, and HackerRank — covering arrays, trees, graphs, dynamic programming, and more.',
  },
]

// Achievements section
const Achievements = () => {
  return (
    <section id="achievements" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Achievements</h2>
          <div className="mt-2 mx-auto h-1 w-16 bg-indigo-600 rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {achievementList.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 rounded-2xl p-6"
            >
              <span className="text-4xl flex-shrink-0">{item.icon}</span>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
