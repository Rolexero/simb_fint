import DashboardLayout from "@/components/DashboardLayout";
import ProfileDropdown from "@/components/ProfileDropdown";
import { AppThemeToggle } from "@/components/ThemeSelector";
import DashboardPage from "@/view/Dashboard";
import LoanPage from "@/view/Loans";
import Transactions from "@/view/Transactions";
import { Navigate, RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <DashboardLayout
        profileDropdown={<ProfileDropdown />}
        themeSelector={<AppThemeToggle />}
      />
    ),
    children: [
      {
        index: true,
        element: <Navigate replace relative="route" to="dashboard" />,
      },
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/transactions",
        element: <Transactions />,
      },

      {
        path: "/loans",
        element: <LoanPage />,
      },

      {
        path: "*",
        element: <h1>404 👀</h1>,
      },
    ],
  },
];

export default routes;
