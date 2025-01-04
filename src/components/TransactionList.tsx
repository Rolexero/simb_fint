import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchTransactionsInfo } from "@/service/request";
import { useQuery } from "@tanstack/react-query";

export default function TransactionList({ transactionType }: any) {
  const { data } = useQuery({
    queryKey: ["get-transactions"], // Query key as an array
    queryFn: () => fetchTransactionsInfo(),
  });

  console.log(data);

  return (
    <Card>
      <CardContent>
        <Table>
          <TableHeader>
            <tr>
              <TableHead>Transaction ID</TableHead>
              <TableHead className="hidden sm:table-cell">Type</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </tr>
          </TableHeader>
          <TableBody>
            {(transactionType
              ? data?.filter(
                  (transaction: any) => transaction?.type == transactionType
                )
              : data
            )?.map((data: any, index: any) => (
              <TableRow
                key={index}
                // onClick={() => navigate(`/transactions/${data.id}`)}
              >
                <TableCell>
                  <div className="font-medium">{data.transaction_id}</div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge className="text-xs" variant="secondary">
                    {data.type.toUpperCase()}
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {data.createdAt}
                </TableCell>
                <TableCell className="text-right">{data.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-{data?.length}</strong> of{" "}
          <strong>{data?.length}</strong> Transactions
        </div>
      </CardFooter>
    </Card>
  );
}
