import { Card } from "@/components/ui/card";

const courses = [
  {
    title: "American Sign Language Basics",
    image: "/img1.webp",
    description: "Learn fundamental ASL signs and grammar",
  },
  {
    title: "Sign Language for Daily Communication",
    image: "/img2.jpg",
    description: "Master everyday conversations in sign language",
  },
  {
    title: "Professional Sign Language",
    image: "/image.jpg",
    description: "Advanced signs for workplace communication",
  },
];

export function MonthlyCoursesGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {courses.map((course) => (
        <Card
          key={course.title}
          className="overflow-hidden hover:shadow-lg transition-all duration-300"
        >
          <div className="aspect-video">
            <img
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg">{course.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {course.description}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}
