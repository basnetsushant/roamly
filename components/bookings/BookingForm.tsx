import { calculateTotals } from "@/utils/calculateTotals";
import { useProperty } from "@/utils/store";
import { Card, CardTitle } from "../ui/card";
import { formatCurrency } from "@/utils/format";
import { Separator } from "../ui/separator";

function BookingForm() {
  const { range, price } = useProperty((state) => state);
  const checkIn = range?.from as Date;
  const checkOut = range?.to as Date;

  const { totalNights, subTotal, cleaning, service, tax, orderTotal } =
    calculateTotals({ checkIn, checkOut, price });

  return (
    <Card className="p-8 mb-4">
      <CardTitle className="mb-8 font-bold">Summary</CardTitle>
      <FormRow
        label={`${price} x ${totalNights} nights`}
        amount={subTotal}
      />

      <FormRow
        label="Cleaning Fee"
        amount={cleaning}
      />
      <FormRow
        label="Service Fee"
        amount={service}
      />
      <FormRow
        label="Tax"
        amount={tax}
      />

      <Separator className="mt-4" />

      <CardTitle className="mt-8 font-bold">
        <FormRow
          label="Booking Total"
          amount={orderTotal}
        />
      </CardTitle>
    </Card>
  );
}

function FormRow({ label, amount }: { label: string; amount: number }) {
  return (
    <p className="flex justify-between text-sm mb-1">
      <span>{label}</span>
      <span>{formatCurrency(amount)}</span>
    </p>
  );
}
export default BookingForm;
