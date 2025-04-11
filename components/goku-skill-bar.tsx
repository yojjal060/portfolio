"use client"

import { useState, useEffect } from "react"

interface GokuSkillBarProps {
  skill: string
  level: number
  maxLevel?: number
  color?: string
  delay?: number
}

export function GokuSkillBar({
  skill,
  level,
  maxLevel = 100,
  color = "from-blue-500 to-blue-600",
  delay = 0,
}: GokuSkillBarProps) {
  const [progress, setProgress] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const percentage = Math.min(100, Math.max(0, (level / maxLevel) * 100))

  const startAnimation = () => {
    setIsAnimating(true)
    setProgress(0)
    setTimeout(() => {
      setProgress(percentage)
    }, 100)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      startAnimation()
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-sm">{skill}</span>
        <span className="text-sm font-bold">
          {level}/{maxLevel}
        </span>
      </div>

      <div className="relative h-8 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
        {/* Goku silhouette */}
        <div
          className={`absolute left-0 top-0 h-full w-8 z-10 flex items-center justify-center
          ${isAnimating ? "animate-goku-power" : ""}`}
        >
          <div
            className="h-6 w-6 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/placeholder.svg?height=50&width=50')` }}
          ></div>
        </div>

        {/* Kamehameha beam */}
        <div
          className={`absolute left-8 top-0 h-full bg-gradient-to-r ${color} 
            ${isAnimating ? "animate-kamehameha" : ""}`}
          style={{ width: `calc(${progress}% - 8px)` }}
        >
          {/* Energy particles */}
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 -translate-y-1/2 h-1 w-1 rounded-full bg-white opacity-75"
              style={{
                right: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${0.5 + Math.random() * 0.5}s`,
              }}
            />
          ))}
        </div>

        {/* Glow effect at the end of beam */}
        {progress > 10 && (
          <div
            className="absolute top-0 h-full w-8 bg-white opacity-30 blur-sm rounded-full"
            style={{ left: `calc(${progress}% - 16px)` }}
          />
        )}
      </div>
    </div>
  )
}

export function GokuSkillBars() {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-bold mb-4">Power Levels</h3>

      <GokuSkillBar skill="JavaScript" level={90} color="from-yellow-400 to-yellow-500" delay={0} />

      <GokuSkillBar skill="React" level={85} color="from-cyan-400 to-cyan-500" delay={200} />

      <GokuSkillBar skill="Node.js" level={80} color="from-green-400 to-green-500" delay={400} />

      <GokuSkillBar skill="TypeScript" level={75} color="from-blue-400 to-blue-600" delay={600} />

      <GokuSkillBar skill="UI/UX Design" level={70} color="from-purple-400 to-purple-600" delay={800} />

      <GokuSkillBar skill="Kamehameha" level={95} color="from-neon-blue via-white to-neon-blue" delay={1000} />
    </div>
  )
}
