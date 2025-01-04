import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function BalanceCard() {
  return (
    <>
      <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-1">
        <CardHeader className="pb-2">
          <CardTitle>Balance</CardTitle>
          <CardTitle className="text-4xl font-Inter font-normal">
            $ 200,329
          </CardTitle>
        </CardHeader>
        <CardFooter className="mt-4">
          <Button>View Transactions</Button>
        </CardFooter>
      </Card>
    </>
  );
}
