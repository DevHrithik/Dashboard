"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Activity } from "lucide-react"

export default function CourseProgress({ value, total }: { value: number; total: number }) {
  const percentage = Math.min(Math.round((value / total) * 100), 100)
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <Card className="bg-gradient-to-br from-zinc-900 to-zinc-950 overflow-hidden">
      <CardContent className="p-6">
        <div className="relative aspect-square w-full">
          {/* Glow effect */}
          <motion.div
            className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 0.15 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {/* Progress circle */}
          <div className="relative flex h-full w-full items-center justify-center">
            <svg className="h-full w-full -rotate-90">
              {/* Background circle */}
              <circle cx="50%" cy="50%" r="45%" className="fill-none stroke-zinc-800 stroke-[6%]" />
              {/* Progress circle */}
              <motion.circle
                cx="50%"
                cy="50%"
                r="45%"
                className="fill-none stroke-orange-500 stroke-[6%]"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: percentage / 100 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <motion.span
                className="text-5xl font-bold text-zinc-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {value}
              </motion.span>
              <motion.div
                className="mt-2 flex items-baseline gap-1.5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <span className="text-sm font-medium text-orange-500">{percentage}%</span>
                <span className="text-sm text-zinc-400">of {total} Calories</span>
              </motion.div>
            </div>
          </div>

          {/* Title */}
          <motion.div
            className="absolute left-0 top-0 flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Activity className="h-5 w-5 text-orange-500" />
            <h3 className="text-sm font-medium text-zinc-100">Running Course</h3>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  )
}

