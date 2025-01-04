// import BalanceCard from "./Components/BalanceCard";
// import RecentOrders from "./Components/RecentOrders";
// import PostProductCard from "./Components/PostTicketCard";

import Page from "@/components/Page";
import BalanceCard from "./components/BalanceCard";
import useUserStore from "@/store/useStore";
import RecentTransactions from "./components/RecentTransaction";
import LoanCard from "@/components/LoanCard";

export default function Dashboard() {
  const currentUser = useUserStore((state) => state.currentUser);

  return (
    <Page title={`Hi ${currentUser ? currentUser[0]?.Name : ""} 👋`}>
      <main className="grid flex-1 items-start gap-4 sm:py-0 md:gap-8 lg:grid-cols-2 xl:grid-cols-2">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 mt-4">
            <BalanceCard
              balance={currentUser ? currentUser[0]?.AccountBalance : 0}
            />

            {/* <LoanCard /> */}
          </div>

          <RecentTransactions loan={false} />
        </div>
      </main>
    </Page>
  );
}
