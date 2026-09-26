import React from 'react'

// Skill group data
const skillGroups = [
  {
    icon: '🔧',
    title: 'Backend',
    skills: ['ASP.NET Core', 'C#', 'REST APIs', 'LINQ', 'Entity Framework'],
  },
  {
    icon: '🎨',
    title: 'Frontend',
    skills: ['Angular', 'React', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    icon: '🗄️',
    title: 'Database',
    skills: ['SQL Server', 'MySQL', 'Stored Procedures', 'T-SQL'],
  },
  {
    icon: '🛠️',
    title: 'Tools & Practices',
    skills: ['Git', 'Debugging', 'Agile / Scrum', 'Linux', 'Postman'],
  },
]

// SkillCard — renders one skill group with individual skill badges
const SkillCard = ({ icon, title, skills }) => (
  <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center gap-2 mb-4">
      <span className="text-2xl">{icon}</span>
      <h3 className="text-base font-bold text-gray-900 dark:text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
)

// Skills section
const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Skills</h2>
          <div className="mt-2 mx-auto h-1 w-16 bg-indigo-600 rounded-full" />
        </div>

        {/* 2x2 grid of skill cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <SkillCard key={group.title} {...group} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
