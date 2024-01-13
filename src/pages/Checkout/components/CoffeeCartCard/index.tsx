import { Trash } from "phosphor-react";
import { InputQuantity } from "../../../../components/InputQuantity";
import { RegularText } from "../../../../components/Typography";
import {
  ActionsCartCardContainer,
  CoffeeCartCardContainer,
  RemoveButton
} from "./styles";

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img
          src="https://s3-alpha-sig.figma.com/img/0a3c/9586/9a75d3fa0ffdecc4bc46ca83d2342e1c?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d8cv8uzdU2cZgaMEeK5IrIir-JbDWGeRvljqR5JPeStvjxYzUHXpVYRQ-Rpaw9ePgt3DoyHXW3KhJ70SJ9DTS0J9EjlEFGxt~uShOrLpZfvTApTXM7SMtWWlovQXCZgZte8DLq1Xr5wZVCzP5jw36ic96cHd5AgaU~8v7Fj0yD-AwfcqGZ6vre5hQfpmLCNQMcQzxbjP~D0xQctb2jQDx~QrUIhmrkZgl45~LuIIak01KwUlwgQodgmVk5Dl3LgcpsIdtMrhJ73G1AmeVEoOUwx895zyHCaTwjEQmoXykLcGGYwtWkvW-YYIMeUI0Dyg9OrQOGXUCgv~VSMJbVa21g__"
        />
        <div>
          <RegularText color="subtitle">
            Latte
          </RegularText>

          <ActionsCartCardContainer>
            <InputQuantity size="small" />
            <RemoveButton>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsCartCardContainer>
        </div>
      </div>
      <p>R$ 19,80</p>
    </CoffeeCartCardContainer>
  )
}