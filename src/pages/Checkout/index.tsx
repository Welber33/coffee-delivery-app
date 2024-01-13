import { CheckoutOrderForm } from "./components/CheckoutOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CheckoutFormContainer } from "./styles";

export function CheckoutPage() {
  return (
    <CheckoutFormContainer className="container">
      <CheckoutOrderForm />
      <SelectedCoffees />
    </CheckoutFormContainer>
  )
}