import { CoffeeCard } from './componentes/CoffeeCard/CoffeeCard'
import { Presentation } from './componentes/Presentation/Presentation'
import { Catalog, HomeContainer } from './styles'
import { coffees } from '../../data/coffees'

export function Home() {
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
