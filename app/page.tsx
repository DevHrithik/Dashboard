import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import { SearchIcon, BellIcon, ChevronRightIcon } from "lucide-react";
import { AppSidebar } from "./components/Sidebar";
import CourseProgress from "./components/course-progess";
import { ActivityGraph } from "./components/activity-graph";
import { MentorList } from "./components/meontor-list";
import { MonthlyCoursesGrid } from "./components/monthy-courses";
import { CourseDetail } from "./components/course-details";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AppSidebar />
        <SidebarInset>
          <div className="flex-1 space-y-6 p-6">
            <header className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold">Hi, Suman</h1>
              <div className="flex items-center gap-4">
                <button className="rounded-full p-2 hover:bg-accent flex items-center justify-center">
                  <SearchIcon className="h-5 w-5" />
                </button>
                <button className="rounded-full p-2 hover:bg-accent flex items-center justify-center">
                  <BellIcon className="h-5 w-5" />
                </button>
                <div className="flex items-center justify-center flex-shrink-0">
                  <Avatar className="h-10 w-10 bg-slate-400 rounded-full flex items-center justify-center">
                    <AvatarImage src={""} alt={"Suman"} />
                    <AvatarFallback className="flex items-center justify-center">
                      {"H"}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </header>

            <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
              <main className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <CourseProgress value={50} total={100} />

                  <ActivityGraph />
                </div>

                <section>
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Monthly Mentors</h2>
                    <button className="rounded-full p-2 hover:bg-accent">
                      <ChevronRightIcon className="h-5 w-5" />
                    </button>
                  </div>
                  <MentorList />
                </section>

                <section>
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Monthly Course</h2>
                    <button className="rounded-full p-2 hover:bg-accent">
                      <ChevronRightIcon className="h-5 w-5" />
                    </button>
                  </div>
                  <MonthlyCoursesGrid />
                </section>
              </main>

              <aside>
                <Card>
                  <div className="p-4">
                    <Calendar />
                  </div>
                  <Separator />
                  <ScrollArea className="h-[600px]">
                    <CourseDetail />
                  </ScrollArea>
                </Card>
              </aside>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
