"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Star, BookOpen, Users } from "lucide-react"
import { motion } from "framer-motion"

const mentors = [
  {
    name: "Lincoln George",
    image: "/placeholder.svg?height=80&width=80",
    rating: 4.5,
    reviews: 200,
    courses: 100,
    students: 5000,
    isFollowing: true,
  },
  {
    name: "Gustave Terff",
    image: "/placeholder.svg?height=80&width=80",
    rating: 4.8,
    reviews: 250,
    courses: 80,
    students: 6000,
    isFollowing: false,
  },
]

export function MentorList() {
  const [followState, setFollowState] = useState(mentors.map((m) => m.isFollowing))

  const toggleFollow = (index: number) => {
    setFollowState((prev) => prev.map((state, i) => (i === index ? !state : state)))
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {mentors.map((mentor, index) => (
        <motion.div
          key={mentor.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <Avatar className="h-16 w-16 border-2 border-primary">
                <AvatarImage src={mentor.image} alt={mentor.name} />
                <AvatarFallback>{mentor.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{mentor.name}</h3>
                  <Button
                    variant={followState[index] ? "secondary" : "default"}
                    size="sm"
                    onClick={() => toggleFollow(index)}
                    className="transition-all duration-300"
                  >
                    {followState[index] ? "Following" : "Follow"}
                  </Button>
                </div>
                <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{mentor.courses} Courses</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{mentor.students.toLocaleString()} Students</span>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{mentor.rating}</span>
                  <span className="text-sm text-muted-foreground">({mentor.reviews} Reviews)</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

