import LoanCard from "@/components/LoanCard";
import Page from "@/components/Page";
import RecentTransactions from "../Dashboard/components/RecentTransaction";

const LoanPage = () => {
  return (
    <Page title="Loans">
      <main className="grid flex-1 items-start gap-4 sm:py-0 md:gap-8 lg:grid-cols-2 xl:grid-cols-2">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 mt-4">
            <LoanCard />
          </div>

          <RecentTransactions loan={true} />
        </div>
      </main>
    </Page>
  );
};

export default LoanPage;
