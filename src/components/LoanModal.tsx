import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Label } from "./ui/label";

export function DrawerDialogDemo({ open, setOpen }: any) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        {/* <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger> */}
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Request New Loan</DialogTitle>
            <DialogDescription>
              Provide your details below to request a new loan. Click 'Submit'
              when you're ready to proceed.{" "}
            </DialogDescription>
          </DialogHeader>
          <LoanForm setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Request New Loan</DrawerTitle>
          <DrawerDescription>
            Provide your details below to request a new loan. Click 'Submit'
            when you're ready to proceed.{" "}
          </DrawerDescription>
        </DrawerHeader>
        <LoanForm setOpen={setOpen} />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function LoanForm({ setOpen }: any) {
  const formik = useFormik({
    initialValues: {
      amount: "",
      tenure: "",
      purpose: "",
    },
    validationSchema: Yup.object({
      amount: Yup.number()
        .typeError("Amount must be a number")
        .positive("Amount must be positive")
        .required("Amount is required"),
      tenure: Yup.number()
        .typeError("Tenure must be a number")
        .positive("Tenure must be positive")
        .required("Tenure is required"),
      purpose: Yup.string()
        .min(5, "Purpose must be at least 5 characters")
        .required("Purpose is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Values:", values);
      alert("Loan request submitted successfully!");
      setOpen(false);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={cn("grid items-start gap-4")}
    >
      {/* Amount Field */}
      <div className="grid gap-2">
        <Label htmlFor="amount">Amount</Label>
        <Input
          type="text"
          id="amount"
          name="amount"
          value={formik.values.amount}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.amount && formik.errors.amount ? (
          <p className="text-red-500 text-sm">{formik.errors.amount}</p>
        ) : null}
      </div>

      {/* Tenure Field */}
      <div className="grid gap-2">
        <Label htmlFor="tenure">Tenure</Label>
        <Input
          type="text"
          id="tenure"
          name="tenure"
          value={formik.values.tenure}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.tenure && formik.errors.tenure ? (
          <p className="text-red-500 text-sm">{formik.errors.tenure}</p>
        ) : null}
      </div>

      {/* Purpose Field */}
      <div className="grid gap-2">
        <Label htmlFor="purpose">Purpose</Label>
        <Input
          type="text"
          id="purpose"
          name="purpose"
          value={formik.values.purpose}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.purpose && formik.errors.purpose ? (
          <p className="text-red-500 text-sm">{formik.errors.purpose}</p>
        ) : null}
      </div>

      {/* Submit Button */}
      <Button type="submit">Submit Loan Request</Button>
    </form>
  );
}
