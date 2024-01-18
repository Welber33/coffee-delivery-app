import { useEffect } from "react";

import { RegularText, TitleText } from "../../components/Typography";
import { ConfirmedOrderContainer, OrderDetailsContainer } from "./styles";
import DeliveryIllustration from "../../assets/deliveryIllustration.png";
import { InfoIcon } from "../../components/InfoIcons";
import { MapPin, Clock, CurrencyDollar } from "phosphor-react"
import { useTheme } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../Checkout";
import { paymentMethods } from "../Checkout/components/CheckoutOrderForm/PaymentMethodOptions";

interface LocationProps {
  state: OrderData;
}

export function ConfirmedOrderPage() {
  const { colors } = useTheme();

  const { state } = useLocation() as unknown as LocationProps;

  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/")
    }
  }, [state, navigate]);

  if (!state) {
    return null;
  }

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
                Entrega em <strong>{state.street}, {state.number}</strong><br />
                {state.district} - {state.city}, {state.uf}
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
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>

        <img src={DeliveryIllustration} />
      </section>
    </ConfirmedOrderContainer>
  )
} 