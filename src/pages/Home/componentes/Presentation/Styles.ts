import styled from 'styled-components'
import background from '../../../../assets/Background.svg'

interface AdvantageProps {
  bgcolor: string
}

export const PresentationContainer = styled.div`
  height: 34rem;
  background: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  #presentation {
    width: 36.75rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    h1 {
      font-size: 3rem;
      font-family: 'Baloo 2', 'Roboto', sans-serif;
      line-height: 130%;
      font-weight: 800;
      color: ${(props) => props.theme['base-title']};
      margin-bottom: 1rem;
    }

    #subtitle {
      font-size: 1.25rem;
      font-family: 'Roboto', sans-serif;
      line-height: 130%;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const AdvantagesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2.5rem;
  grid-row-gap: 1.25rem;
`

export const Advantage = styled.div<AdvantageProps>`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  color: ${(props) => props.theme['base-text']};

  #text {
    font-size: 1rem;
    line-height: 130%;
  }

  #icon {
    width: 2rem;
    height: 2rem;
    color: white;
    background-color: ${(props) => props.theme[props.bgcolor]};
    border-radius: 50%;
    display: grid;
    place-items: center;
  }
`
