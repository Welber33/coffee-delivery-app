import { CheckoutOrderForm } from "./components/CheckoutOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CheckoutFormContainer } from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

enum PaymentMethod {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const checkoutOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe seu CEP"),
  street: zod.string().min(1, "Informe seu Rua"),
  number: zod.string().min(1, "Informe o número de sua casa"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe seu Bairro"),
  city: zod.string().min(1, "Informe sua Cidade"),
  uf: zod.string().min(1, "Informe seu UF"),
  paymentMethod: zod.nativeEnum(PaymentMethod, {
    errorMap: () => {
      return { message: "Informe o método de pagamento " }
    }
  })
});

export type OrderData = zod.infer<typeof checkoutOrderFormValidationSchema>

type CheckoutOrderFormData = OrderData;

export function CheckoutPage() {
  const checkoutOrderForm = useForm<CheckoutOrderFormData>({
    resolver: zodResolver(checkoutOrderFormValidationSchema)
  });

  const { handleSubmit } = checkoutOrderForm;

  const navigate = useNavigate();

  const { cleanCart } = useCart();

  function handleCheckoutOrder(data: CheckoutOrderFormData) {
    navigate("/confirmedOrder", {
      state: data,
    });
    cleanCart();
  }

  return (
    <FormProvider {...checkoutOrderForm}>
      <CheckoutFormContainer className="container" onSubmit={handleSubmit(handleCheckoutOrder)}>
        <CheckoutOrderForm />
        <SelectedCoffees />
      </CheckoutFormContainer>
    </FormProvider>
  )
}