import { ButtonContainer } from "../../../../components/Button/styles";
import { RegularText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { priceFormat } from "../../../../utils/priceFormat";
import { ConfirmationCoffeesSectionContainer } from "./styles";

export function ConfirmationCoffeesSection() {
  const deliveryPrice = 3.5;
  const { totalCartItems, cartQuantity } = useCart();

  const cartTotal = deliveryPrice + totalCartItems;

  const formattedTotalItems = priceFormat(totalCartItems);
  const formattedCartTotal = priceFormat(cartTotal);
  const formattedDeliveryPrice = priceFormat(deliveryPrice);

  return (
    <ConfirmationCoffeesSectionContainer>
      <div>
        <RegularText size="s">
          Total de itens
        </RegularText>
        <RegularText>
          R$ {formattedTotalItems}
        </RegularText>
      </div>

      <div>
        <RegularText size="s">
          Entrega
        </RegularText>
        <RegularText>
          R$ {formattedDeliveryPrice}
        </RegularText>
      </div>

      <div>
        <RegularText size="l" weight="700" color="subtitle">
          Total
        </RegularText>
        <RegularText size="l" weight="700" color="subtitle">
          R$ {formattedCartTotal}
        </RegularText>
      </div>

      <ButtonContainer disabled={cartQuantity <= 0}>
        Confirmar Pedido
      </ButtonContainer>
    </ConfirmationCoffeesSectionContainer>
  )
}