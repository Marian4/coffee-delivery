import {
  ConfirmOrderButton,
  OrderContainer,
  OrderItemContainer,
} from './styles'
import { coffees } from '../../../../data/coffees'
import { Counter } from '../../../../components/Counter'
import { Trash } from 'phosphor-react'
import { priceFormatter } from '../../../../utils/formatter'

export function OrderItem({ coffee }) {
  const item = coffees[coffee]

  return (
    <OrderItemContainer>
      <div id="coffee">
        <img src={`/coffees/${item.image}`} alt="" />
        <div id="coffeeInfo">
          {item.name}
          <div id="options">
            <Counter />
            <button>
              <Trash size={16} />
              REMOVER
            </button>
          </div>
        </div>
      </div>
      <span id="itemPrice">{priceFormatter.format(item.price)}</span>
    </OrderItemContainer>
  )
}

export function Order() {
  return (
    <OrderContainer>
      <h3>Cafés selecionados</h3>
      <div id="content">
        <OrderItem coffee={0} />

        <OrderItem coffee={5} />
        <table>
          <tbody>
            <tr>
              <td>Total de itens</td>
              <td>R$ 29,70</td>
            </tr>
            <tr>
              <td>Entrega</td>
              <td>R$ 3,50</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>R$ 33,20</td>
            </tr>
          </tbody>
        </table>

        <ConfirmOrderButton type="submit">CONFIRMAR PEDIDO</ConfirmOrderButton>
      </div>
    </OrderContainer>
  )
}
