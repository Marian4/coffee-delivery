import styled from 'styled-components'

export const OrderContainer = styled.div`
  width: 28rem;

  #content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    background: ${(props) => props.theme['base-card']};
    border-top-left-radius: 6px;
    border-top-right-radius: 44px;
    border-bottom-left-radius: 44px;
    border-bottom-right-radius: 6px;

    padding: 2.5rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['base-text']};

    tr {
      &:last-child {
        font-size: 1.25rem;
        font-weight: bold;
        color: ${(props) => props.theme['base-subtitle']};
      }

      td + td {
        padding-bottom: 0.75rem;
      }

      td {
        &:last-child {
          text-align: right;
        }
      }
    }
  }
`

export const ConfirmOrderButton = styled.button`
  width: 100%;
  height: 2.875rem;
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  padding: 0.75rem 0;

  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  transition: 0.2s;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`

export const OrderItemContainer = styled.div`
  padding: 0.25rem;
  padding-bottom: 1.75rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  #coffee {
    display: flex;
    gap: 1.25rem;
    align-items: stretch;
  }

  #coffeeInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1rem;
    line-height: 130%;
  }

  #options {
    display: flex;
    gap: 0.5rem;
    align-items: stretch;

    > button {
      border-radius: 6px;
      background: ${(props) => props.theme['base-button']};
      padding: 0.5rem;
      border: 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
      transition: 0.2s;

      color: ${(props) => props.theme['base-text']};
      font-family: 'Roboto', sans-serif;
      font-size: 0.75rem;

      svg {
        color: ${(props) => props.theme.purple};
      }

      &:hover {
        background: ${(props) => props.theme['base-hover']};
      }
    }
  }

  img {
    width: 4rem;
  }

  #itemPrice {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
    line-height: 130%;
  }
`
