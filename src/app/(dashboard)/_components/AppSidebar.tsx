"use client"
import { Calendar, Home, Inbox, Search, Settings, User } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"
// Menu items.
const items = [
  {
    title: "Posts",
    url: "/new-post",
    icon: Home,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: User,
  },

  
]

export function AppSidebar() {

    const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} >
                  <SidebarMenuButton data-active={pathname === item.url} className="data-[active=true]:bg-primary data-[active=true]:text-primary-foreground" asChild>
                    <Link href={item.url}  >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
