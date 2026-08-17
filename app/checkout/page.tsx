import { Suspense } from "react";
import CheckoutForm from "./CheckoutForm";

const CheckoutPage = () => {
  return (
    <Suspense fallback={null}>
      <CheckoutForm />
    </Suspense>
  );
};

export default CheckoutPage;
