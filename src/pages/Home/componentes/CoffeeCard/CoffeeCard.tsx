import { Coffee } from '../../../../data/coffees'
import { CoffeeCardContainer } from './styles'

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.image}`} alt="" />
      <div id="tags">
        {coffee.tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>
      <div>{coffee.price}</div>
    </CoffeeCardContainer>
  )
}
