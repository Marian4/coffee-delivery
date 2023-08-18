import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  /* width: 16rem; */
  height: 19.375rem;

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  padding: 0 1.5rem;

  h3 {
    font-family: 'Baloo 2', 'Roboto', sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 130%;
  }

  #description {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    font-family: 'Roboto', sans-serif;
    line-height: 130%;
    text-align: center;
  }

  img {
    margin-top: -2rem;
  }

  #tags {
    display: flex;
    gap: 0.25rem;
  }
`
export const Tag = styled.span`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  padding: 0.5rem;
  border-radius: 100px;
  line-height: 130%;
  font-size: 0.625rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
`

export const ActionsArea = styled.div`
  width: 13rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  #price {
    color: ${(props) => props.theme['base-text']};
    font-family: 'Baloo 2', 'Roboto', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 130%;
  }

  #actions {
    display: flex;
    align-items: stretch;
    gap: 0.5rem;
  }

  #cartIcon {
    background-color: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme.white};
    padding: 0.5rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
  }
`

export const Counter = styled.div`
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
  }
`
