import { Minus, Plus } from "phosphor-react";
import { IconWrapper, InputQuantityContainer } from "./styles";

interface InputQuantityProps {
  size?: "medium" | "small";
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function InputQuantity({ onIncrease, onDecrease, quantity, size = "medium" }: InputQuantityProps) {
  return (
    <InputQuantityContainer size={size}>
      <IconWrapper onClick={onDecrease} disabled={quantity <= 1}>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </InputQuantityContainer>
  );
}