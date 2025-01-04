import * as React from "react";

import LoadingView from "./LoadingView";
import { Outlet } from "react-router-dom";

interface Props {
  profileDropdown?: JSX.Element;
  themeSelector?: React.ReactNode;
}

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
// import { AppSidebar } from "./app-Sidebar";

export default function DashboardLayout(props: Props) {
  const { profileDropdown, themeSelector } = props;
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between pr-5 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="-ml-1" />
              {/* <h1>Welcome 👋</h1> */}
            </div>
          </div>
          <div>
            <div className="flex gap-2 items-center border-l-2 pl-4">
              {/* {themeSelector} */}

              {profileDropdown}
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <React.Suspense fallback={<LoadingView loading />}>
            <Outlet />
          </React.Suspense>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
