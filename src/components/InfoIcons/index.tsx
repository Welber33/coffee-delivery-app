import { ReactNode } from "react";
import { IconContainer, InfoIconContainer } from "./styles";

interface InfoIconProps {
  icon: ReactNode;
  text: string | ReactNode;
  iconColor: string;
}

export function InfoIcon({ icon, text, iconColor }: InfoIconProps) {
  return (
    <InfoIconContainer>
      <IconContainer iconColor={iconColor}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </InfoIconContainer>
  )
}