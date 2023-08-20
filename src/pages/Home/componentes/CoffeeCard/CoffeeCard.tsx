import { ShoppingCart } from 'phosphor-react'
import { Coffee } from '../../../../data/coffees'
import { priceFormatter } from '../../../../utils/formatter'
import { CoffeeCardContainer, Tag, ActionsArea } from './styles'
import { Counter } from '../../../../components/Counter'

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.image}`} alt="" />
      <div id="tags">
        {coffee.tags.map((tag, index) => (
          <Tag key={index}>{tag.toUpperCase()}</Tag>
        ))}
      </div>
      <h3>{coffee.name}</h3>
      <p id="description">{coffee.description}</p>
      <ActionsArea>
        <span id="price">{priceFormatter.format(coffee.price)}</span>
        <div id="actions">
          <Counter />
          <div id="cartIcon">
            <ShoppingCart size={22} weight="fill" />
          </div>
        </div>
      </ActionsArea>
    </CoffeeCardContainer>
  )
}
