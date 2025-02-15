import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, Star, Users } from "lucide-react";

const modules = [
  {
    id: 1,
    title: "Introduction to Sign Language",
    duration: "15:00",
  },
  {
    id: 2,
    title: "Basic Hand Shapes and Movements",
    duration: "30:00",
  },
  {
    id: 3,
    title: "Common Everyday Phrases",
    duration: "25:00",
  },
  {
    id: 4,
    title: "Numbers and Time Expressions",
    duration: "20:00",
  },
  {
    id: 5,
    title: "Interactive Practice Session",
    duration: "30:00",
  },
];

export function CourseDetail() {
  return (
    <div className="p-4">
      <Card className="overflow-hidden">
        <div className="aspect-video">
          <img
            src="/image.jpg"
            alt="Course thumbnail"
            className="h-full w-full object-cover"
          />
        </div>
      </Card>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">
         Professional Sign Language
        </h3>
        <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>500 Student</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4" />
            <span>5 Medal</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>1h 30m</span>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h4 className="mb-4 font-medium">5 Modul</h4>
        <div className="space-y-4">
          {modules.map((module) => (
            <div
              key={module.id}
              className="flex items-center justify-between rounded-lg border p-4"
            >
              <div className="flex items-center gap-4">
                <span className="font-medium">{module.id}</span>
                <span>{module.title}</span>
              </div>
              <span className="text-sm text-muted-foreground">
                {module.duration}
              </span>
            </div>
          ))}
        </div>
        <Button className="mt-6 w-full" size="lg">
          Go to Detail
        </Button>
      </div>
    </div>
  );
}
