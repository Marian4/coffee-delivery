import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  width: 100%;
  padding-left: calc((100% - 70rem) / 2);
  padding-right: calc((100% - 70rem) / 2);
  padding-bottom: 8.5rem;

  display: flex;
  gap: 2rem;
  align-items: flex-start;

  h3 {
    font-family: 'Baloo 2', 'Roboto', sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
    font-size: 1.125rem;
    font-weight: bold;

    margin-bottom: 1rem;
    margin-top: 3rem;
  }

  #deliveryInfo {
    flex: 1;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    fieldset {
      border: 0;
      background: ${(props) => props.theme['base-card']};
      padding: 2.5rem;
      border-radius: 6px;
    }
  }
`
