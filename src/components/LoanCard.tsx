import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DrawerDialogDemo } from "./LoanModal";
import { useState } from "react";

export default function PostProductCard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card
        className="sm:col-span-2 flex flex-col justify-between"
        x-chunk="dashboard-05-chunk-0"
      >
        <CardHeader className="pb-3">
          <CardTitle>Flexible Loans for Every Need</CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            Whether you're looking to start a business, consolidate debt, or
            manage unexpected expenses, our seamless loan application process
            gets you the funds you need—fast{" "}
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button
            onClick={() => {
              setOpen(true);
            }}
          >
            Get a Loan
          </Button>
        </CardFooter>
      </Card>
      <DrawerDialogDemo open={open} setOpen={setOpen} />
    </>
  );
}
