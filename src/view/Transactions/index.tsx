import Page from "@/components/Page";
import TransactionList from "@/components/TransactionList";
import { CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const Transactions = () => {
  // State to hold the selected value
  const [transactionType, setTransactionType] = useState("");
  return (
    <Page title="Transactions">
      <div className="flex flex-col gap-2 my-4 md:flex-row">
        <Select onValueChange={(value) => setTransactionType(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue
              placeholder={transactionType || "Select transaction type"}
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Transaction Type</SelectLabel>
              <SelectItem value="credit">Credit</SelectItem>
              <SelectItem value="debit">Debit</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>{" "}
      </div>
      <CardContent>
        <TransactionList transactionType={transactionType} />{" "}
      </CardContent>
    </Page>
  );
};

export default Transactions;
