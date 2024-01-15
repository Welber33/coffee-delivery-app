import { RegularText, TitleText } from "../../components/Typography";
import { ConfirmedOrderContainer, OrderDetailsContainer } from "./styles";
import DeliveryIllustration from "../../assets/deliveryIllustration.png";
import { InfoIcon } from "../../components/InfoIcons";
import { MapPin, Clock, CurrencyDollar } from "phosphor-react"
import { useTheme } from "styled-components";

export function ConfirmedOrderPage() {
  const { colors } = useTheme();

  return (
    <ConfirmedOrderContainer className="container">
      <div>
        <TitleText size="l">
          Uhu! Pedido confirmado
        </TitleText>

        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoIcon
            icon={<MapPin weight="fill" />}
            iconColor={colors["brand-purple"]}
            text={
              <RegularText>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong><br />
                Farrapos - Porto Alegre, RS
              </RegularText>
            }
          />

          <InfoIcon
            icon={<Clock weight="fill" />}
            iconColor={colors["brand-yellow"]}
            text={
              <RegularText>
                Previsão de entrega<br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />

          <InfoIcon
            icon={<CurrencyDollar weight="fill" />}
            iconColor={colors["brand-yellow-dark"]}
            text={
              <RegularText>
                Pagamento na entrega<br />
                <strong>Cartão de crédito</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>

        <img src={DeliveryIllustration} />
      </section>
    </ConfirmedOrderContainer>
  )
} 