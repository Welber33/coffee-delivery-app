import { ButtonContainer } from "../../../../components/Button/styles";
import { RegularText } from "../../../../components/Typography";
import { ConfirmationCoffeesSectionContainer } from "./styles";

export function ConfirmationCoffeesSection() {
  return (
    <ConfirmationCoffeesSectionContainer>
      <div>
        <RegularText size="s">
          Total de itens
        </RegularText>
        <RegularText>
          R$ 39,60
        </RegularText>
      </div>

      <div>
        <RegularText size="s">
          Entrega
        </RegularText>
        <RegularText>
          R$ 3,50
        </RegularText>
      </div>

      <div>
        <RegularText size="l" weight="700" color="subtitle">
          Total de itens
        </RegularText>
        <RegularText size="l" weight="700" color="subtitle">
          R$ 43,10
        </RegularText>
      </div>

      <ButtonContainer>
        Confirmar Pedido
      </ButtonContainer>
    </ConfirmationCoffeesSectionContainer>
  )
}