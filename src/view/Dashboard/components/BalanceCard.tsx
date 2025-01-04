import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchUsersInfo } from "@/service/request";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export default function BalanceCard({ balance }: any) {
  const navigate = useNavigate();

  return (
    <>
      <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-1">
        <CardHeader className="pb-2">
          <CardTitle>Balance</CardTitle>
          <CardTitle className="text-4xl font-Inter font-normal">
            {balance}
          </CardTitle>
        </CardHeader>
        <CardFooter className="mt-4">
          <Button onClick={() => navigate("/transactions")}>
            View Transactions
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
