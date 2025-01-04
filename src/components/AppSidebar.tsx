import * as React from "react";
import { Bot, LogOut, Settings2, SquareTerminal } from "lucide-react";
// import { NavMain } from "@/components/nav-main";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { NavMain } from "./NavMain";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: SquareTerminal,
      items: [
        {
          title: "Dashboard",
          url: "/dashboard",
        },
      ],
    },
    {
      title: "Products",
      url: "/products",
      icon: Bot,
      items: [
        {
          title: "Loan Management",
          url: "/loans-mgt",
        },
        {
          title: "Transaction",
          url: "/transaction",
        },
      ],
    },
    {
      title: "Transactions",
      url: "/transactions",
      icon: Bot,
      items: [
        {
          title: "Transactions List",
          url: "/transactions",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { isMobile, state } = useSidebar();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/dashboard">
                <img
                  src="/src//assets/simbrella_ng.jpeg"
                  width={30}
                  height={30}
                />
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    SimbrellaFinApp
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <div className="flex text-destructive gap-2 p-2">
          <div className="flex size-6 items-center justify-center rounded-sm border">
            <LogOut className="size-4 shrink-0" />
          </div>
          {(state !== "collapsed" || isMobile) && "Logout"}
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
