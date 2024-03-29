import { TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmationCoffeesSection } from "./ConfirmationCoffeesSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
  const { cartItems } = useCart();

  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        {cartItems.map((cartItem) => (
          <CoffeeCartCard
            key={cartItem.id}
            coffee={cartItem}
          />
        ))}
        <ConfirmationCoffeesSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}