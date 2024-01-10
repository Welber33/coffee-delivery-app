import { styled } from "styled-components";
import { rgba } from "polished";
import BackgroundCoffeeDelivery from "../../../assets/background-coffee-delivery.png";
import { TitleText } from "../../../components/Typography";

export const IntroContainer = styled.section`
  width: 100%;
  height: 34rem;
  background: ${(props) => `url(${BackgroundCoffeeDelivery}) no-repeat center,
      linear-gradient(
        0deg,
        ${props.theme.colors["base-white"]} 0%,
        ${rgba(props.theme.colors["base-background"], 0.2)} 50%,
        ${props.theme.colors["base-background"]} 100%
      )`};
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`;

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`;

export const BenefitsItemsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`;