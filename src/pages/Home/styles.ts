import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;

  #catalogTitle {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2', 'Roboto', sans-serif;
    font-size: 2rem;
    font-weight: bold;
    line-height: 130%;
    width: 100%;
    margin: 4rem auto;
  }

  > * {
    padding-left: calc((100% - 70rem) / 2);
    padding-right: calc((100% - 70rem) / 2);
  }
`
export const Catalog = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 16rem);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  padding-bottom: 8.5rem;
`
