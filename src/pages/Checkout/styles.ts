import styled from "styled-components";

export const CheckoutFormContainer = styled.form`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export const SectionFormStyle = styled.div`
  width: 100%;
  background: ${props => props.theme.colors["base-card"]};
  border-radius: 4px;
  padding: 2.5rem;
`;