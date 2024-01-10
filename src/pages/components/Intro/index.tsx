import { BenefitsItemsContainer, IntroContainer, IntroContent, IntroTitle } from "./styles";
import CoffeeSectionImage from "../../../assets/coffee-section-image.png"
import { RegularText } from "../../../components/Typography";
import { InfoIcon } from "../../../components/InfoIcons";

import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { useTheme } from "styled-components";

export function Intro() {
  const { colors } = useTheme();

  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <RegularText size="l" color="subtitle" as="h3">
              Com o Coffee Delivery você recebe seu café onde estiver,
              a qualquer hora
            </RegularText>
          </section>

          <BenefitsItemsContainer>
            <InfoIcon 
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
              iconColor={colors["brand-yellow-dark"]}
            />
            
            <InfoIcon 
              icon={<Package weight="fill" />}
              text="Embalagem mantém o café intacto"
              iconColor={colors["base-text"]}
            />

            <InfoIcon 
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreada"
              iconColor={colors["brand-yellow"]}
            />

            <InfoIcon 
              icon={<Coffee weight="fill" />}
              text="O café chega fresquinho até você"
              iconColor={colors["brand-purple"]}
            />
          </BenefitsItemsContainer>
        </div>

        <img src={CoffeeSectionImage} />
      </IntroContent>
    </IntroContainer>
  )
}