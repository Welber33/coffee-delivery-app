import styled from "styled-components";

export const InfoIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

interface IconContainerProps {
  iconColor: string;
}

export const IconContainer = styled.div<IconContainerProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  background: ${({ iconColor }) => iconColor};
  color: ${props => props.theme.colors["base-white"]};

  display: flex;
  align-items: center;
  justify-content: center;
`;