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
import { fetchUsersInfo } from "@/service/request";
import { useQuery } from "@tanstack/react-query";
import useUserStore from "@/store/useStore";
// import { AppSidebar } from "./app-Sidebar";

export default function DashboardLayout(props: Props) {
  const setCurrentUser = useUserStore((state) => state.setCurrentUser);

  const { profileDropdown } = props;

  const { data, isLoading } = useQuery({
    queryKey: ["get-user"], // Query key as an array
    queryFn: () => fetchUsersInfo(),
  });

  console.log(data);

  // Update Zustand state when `data` changes
  React.useEffect(() => {
    if (data) {
      setCurrentUser(data);
    }
  }, [data, setCurrentUser]);

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
            {isLoading ? <LoadingView loading /> : <Outlet />}
          </React.Suspense>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
