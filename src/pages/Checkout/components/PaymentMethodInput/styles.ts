import styled, { css } from "styled-components";

export const PaymentMethodContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div{ 
    ${({ theme }) => css`
      background: ${theme.colors["brand-purple-light"]};
      border-color: ${theme.colors["brand-purple"]};

      &:hover {
        background: ${theme.colors["brand-purple-light"]};
      }
    `}
  }
`;

export const ContentContainer = styled.div`
  padding: 0 1rem;
  background: ${props => props.theme.colors["base-button"]};
  color: ${props => props.theme.colors["base-text"]};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 3px;
  height: 3rem;
  border: 1px solid ${props => props.theme.colors["base-button"]};

  svg {
    color: ${props => props.theme.colors["brand-purple"]};
  }

  &:hover {
    background: ${props => props.theme.colors["base-hover"]};
  }

  user-select: none;
`;