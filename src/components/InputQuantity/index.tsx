import { Minus, Plus } from "phosphor-react";
import { IconWrapper, InputQuantityContainer } from "./styles";

interface InputQuantityProps {
  size?: "medium" | "small";
}

export function InputQuantity({ size = "medium" }: InputQuantityProps) {
  return (
    <InputQuantityContainer size={size}>
      <IconWrapper>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={1} />
      <IconWrapper>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </InputQuantityContainer>
  )
}