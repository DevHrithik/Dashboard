"use client";
import {
  BookOpen,
  MessageCircle,
  Settings,
  ChevronLeft,
  Box,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const navigation = [
  {
    title: "Overview",
    icon: BookOpen,
    href: "#",
    isActive: true,
  },
  {
    title: "Comments",
    icon: MessageCircle,
    href: "#",
  },
  {
    title: "Reading",
    icon: BookOpen,
    href: "#",
  },
  {
    title: "Message",
    icon: MessageCircle,
    href: "#",
  },
  {
    title: "Setting",
    icon: Settings,
    href: "#",
  },
];

export function AppSidebar() {
  const { state } = useSidebar();

  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarHeader className="border-b p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <Box />
            <span className={state === "collapsed" ? "hidden" : ""}>
              SignFluent
            </span>
          </div>
          <SidebarTrigger>
            <ChevronLeft className="h-4 w-4" />
          </SidebarTrigger>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navigation.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                isActive={item.isActive}
                className="gap-2"
                tooltip={item.title}
              >
                <a href={item.href}>
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
