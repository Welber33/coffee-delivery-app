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
          <InputQuantity />
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}