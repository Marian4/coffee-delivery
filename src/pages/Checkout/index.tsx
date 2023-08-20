import { CheckoutContainer } from './styles'
import { AddressForm } from './components/AddressForm'
import { Order } from './components/Order'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div id="deliveryInfo">
        <h3>Complete seu pedido</h3>
        <form>
          <AddressForm />
          <fieldset>
            <strong>Pagamento</strong>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
            <button>CARTÃO DE CRÉDITO</button>
            <button>CARTÃO DE DÉBITO</button>
            <button>DINHEIRO</button>
          </fieldset>
        </form>
      </div>

      <Order />
    </CheckoutContainer>
  )
}
