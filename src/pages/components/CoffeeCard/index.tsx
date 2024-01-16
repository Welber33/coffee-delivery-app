import { ShoppingCart } from "phosphor-react";

import { InputQuantity } from "../../../components/InputQuantity";
import { RegularText, TitleText } from "../../../components/Typography";
import {
  AddCartWrapper,
  CardFooter,
  CoffeeCardContainer,
  CoffeeDescription,
  CoffeeName,
  Tags
} from "./styles";
import { priceFormat } from "../../../utils/priceFormat";
import { useCart } from "../../../hooks/useCart";
import { useState } from "react";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1);
  const { addCoffeeToCart } = useCart();

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }

    addCoffeeToCart(coffeeToAdd);
  }

  function handleIncreaseCoffeeQuantity() {
    setQuantity((state) => state + 1);
  }

  function handleDecreaseCoffeeQuantity() {
    setQuantity((state) => state - 1)
  }

  const formattedPrice = priceFormat(coffee.price);

  return (
    <CoffeeCardContainer>
      <img
        src={`/coffeeImages/${coffee.photo}`}
      />
      <Tags>
        {coffee.tags.map(tag => (
          <span
            key={`${coffee.id}${tag}`}
          >
            {tag}
          </span>
        ))}
      </Tags>

      <CoffeeName>
        {coffee.name}
      </CoffeeName>

      <CoffeeDescription>
        {coffee.description}
      </CoffeeDescription>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>

        <AddCartWrapper>
          <InputQuantity
            onIncrease={handleIncreaseCoffeeQuantity}
            onDecrease={handleDecreaseCoffeeQuantity}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}