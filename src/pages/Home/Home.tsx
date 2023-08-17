import { CoffeesContext } from '../../contexts/CoffeesContext'
import { CoffeeCard } from './componentes/CoffeeCard/CoffeeCard'
import { Presentation } from './componentes/Presentation/Presentation'
import { useContext } from 'react'
import { Catalog, HomeContainer } from './styles'

export function Home() {
  const { coffees } = useContext(CoffeesContext)

  return (
    <HomeContainer>
      <Presentation />
      <h3 id="catalogTitle">Nossos cafés</h3>
      <Catalog>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.name} coffee={coffee} />
        ))}
      </Catalog>
    </HomeContainer>
  )
}
