import styled from 'styled-components'

export const CounterContainer = styled.div`
  width: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 6px;

  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  background-color: ${(props) => props.theme['base-button']};

  button {
    color: ${(props) => props.theme.purple};
    background-color: transparent;
    border: 0;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
