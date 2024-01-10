import { Minus, Plus } from "phosphor-react";
import { IconWrapper, InputQuantityContainer } from "./styles";

export function InputQuantity() {
  return (
    <InputQuantityContainer>
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