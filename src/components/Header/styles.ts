import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  nav {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;

    a {
      display: flex;
      align-items: center;
    }

    #location {
      background-color: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme['purple-dark']};
      display: flex;
      align-items: center;
      padding: 0.5rem;
      gap: 0.25rem;
      border-radius: 6px;
      cursor: default;
    }

    #cartIcon {
      background-color: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
      padding: 0.5rem;
      gap: 0.25rem;
      border-radius: 6px;
    }
  }
`