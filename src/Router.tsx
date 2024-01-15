import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { CheckoutPage } from "./pages/Checkout";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { ConfirmedOrderPage } from "./pages/ConfirmedOrder";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/confirmedOrder" element={<ConfirmedOrderPage />} />
      </Route>
    </Routes>
  )
}