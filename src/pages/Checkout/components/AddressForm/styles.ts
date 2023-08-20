import styled from 'styled-components'

export const AddressFormContainer = styled.fieldset`
  #cep {
    grid-area: cep;
  }
  #city {
    grid-area: city;
  }
  #neighborhood {
    grid-area: neighborhood;
  }
  #street {
    grid-area: street;
  }
  #number {
    grid-area: number;
  }
  #complement {
    grid-area: complement;
  }
  #uf {
    grid-area: uf;
  }
  #description {
    grid-area: description;
  }
  #fieldsetTitle {
    grid-area: fieldsetTitle;
    display: flex;
    align-items: center;
  }

  #titleArea {
    display: flex;
    gap: 0.5rem;
    align-items: flex-start;

    svg {
      color: ${(props) => props.theme['yellow-dark']};
    }

    #fieldsetTitle {
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-subtitle']};
    }

    #description {
      font-family: 'Roboto', sans-serif;
      font-size: 0%.875;
      line-height: 130%;
      color: ${(props) => props.theme['base-text']};
    }
  }

  #inputsArea {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 12.5rem 17.25rem 3.75rem;
    grid-row-gap: 1rem;
    grid-column-gap: 0.75rem;

    grid-template-areas:
      'cep . .'
      'street street street'
      'number complement complement'
      'neighborhood city uf';
  }
`

export const AddressInput = styled.input`
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};

  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
  }

  &:focus {
    outline: 1px solid ${(props) => props.theme['yellow-dark']};
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`
