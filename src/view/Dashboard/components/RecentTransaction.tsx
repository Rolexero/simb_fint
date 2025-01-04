import TransactionList from "@/components/TransactionList";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function RecentTransactions({ loan }: any) {
  return (
    <div>
      <h6 className="font-semibold mb-2">
        Recent {loan ? "Loans" : "Transactions"}
      </h6>

      <Card x-chunk="dashboard-05-chunk-3">
        <CardHeader className="px-7">
          <CardTitle>{loan ? "Loans" : "Transactions"}</CardTitle>
          <CardDescription>
            Recent {loan ? "Loans" : "Transactions"} from you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TransactionList />{" "}
        </CardContent>
      </Card>
    </div>
  );
}
