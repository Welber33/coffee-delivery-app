import { Trash } from "phosphor-react";
import { InputQuantity } from "../../../../components/InputQuantity";
import { RegularText } from "../../../../components/Typography";
import {
  ActionsCartCardContainer,
  CoffeeCartCardContainer,
  RemoveButton
} from "./styles";
import { CartItem } from "../../../../contexts/CartContext";
import { priceFormat } from "../../../../utils/priceFormat";
import { useCart } from "../../../../hooks/useCart";

interface CoffeeCartCardProps {
  coffee: CartItem;
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart();

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase');
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease');
  }

  function handleRemove() {
    removeCartItem(coffee.id);
  }

  const coffeeTotal = coffee.price * coffee.quantity;
  const formattedPrice = priceFormat(coffeeTotal);

  return (
    <CoffeeCartCardContainer>
      <div>
        <img
          src={`/coffeeImages/${coffee.photo}`}
        />
        <div>
          <RegularText color="subtitle">
            {coffee.name}
          </RegularText>

          <ActionsCartCardContainer>
            <InputQuantity
              size="small"
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={coffee.quantity}
            />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsCartCardContainer>
        </div>
      </div>
      <p>R$ {formattedPrice}</p>
    </CoffeeCartCardContainer>
  )
}