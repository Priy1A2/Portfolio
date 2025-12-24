import { motion } from 'framer-motion'
import { BriefcaseIcon, CalendarIcon } from 'lucide-react'
import Image from 'next/image'
import { experiences } from '@/lib/data'
import { Experience } from '../../../types'

export default function ExperienceSection({ theme }: { theme: 'retro' | 'sunset' }) {
  return (
    <div>
      <h2
        className={`text-3xl font-bold mb-8 text-center ${
          theme === 'retro'
            ? 'text-green-400 font-mono'
            : 'text-orange-400 font-serif'
        }`}
      >
        Work Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp: Experience, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`p-6 rounded-lg shadow-lg border ${
              theme === 'retro'
                ? 'bg-gray-800 border-green-400'
                : 'bg-gray-700 border-orange-400'
            }`}
          >
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
              {/* Logo / Icon */}
              <div className="flex-shrink-0">
                {exp.image ? (
                  <div className="w-10 h-10 rounded bg-white flex items-center justify-center">
                    <Image
                      src={exp.image}
                      alt={`${exp.company} logo`}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <BriefcaseIcon
                    className={`w-6 h-6 ${
                      theme === 'retro'
                        ? 'text-green-400'
                        : 'text-orange-400'
                    }`}
                  />
                )}
              </div>

              {/* Title + Company */}
              <div>
                <h3
                  className={`text-xl font-semibold ${
                    theme === 'retro' ? 'font-mono' : 'font-sans'
                  }`}
                >
                  {exp.role}
                </h3>

                <p
                  className={`text-gray-400 ${
                    theme === 'retro' ? 'font-mono' : 'font-sans'
                  }`}
                >
                  {exp.company}
                  {exp.team && ` · ${exp.team}`}
                </p>
              </div>
            </div>

            {/* Period */}
            <div
              className={`flex items-center text-gray-500 mb-4 ${
                theme === 'retro' ? 'font-mono' : 'font-sans'
              }`}
            >
              <CalendarIcon className="w-4 h-4 mr-2" />
              <span>{exp.period}</span>
            </div>

            {/* Description */}
            <p
              className={`text-gray-300 mb-4 ${
                theme === 'retro' ? 'font-mono' : 'font-sans'
              }`}
            >
              {exp.description}
            </p>

            {/* Highlights */}
            {exp.highlights && (
              <ul className="list-disc list-inside space-y-1 text-gray-300 mb-4">
                {exp.highlights.map((point, i) => (
                  <li
                    key={i}
                    className={theme === 'retro' ? 'font-mono' : 'font-sans'}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            )}

            {/* Tech Stack */}
            {exp.techStack && (
              <p
                className={`text-sm text-gray-400 ${
                  theme === 'retro' ? 'font-mono' : 'font-sans'
                }`}
              >
                <span className="font-semibold">Tech:</span> {exp.techStack}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}