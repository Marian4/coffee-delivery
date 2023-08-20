import { MapPinLine } from 'phosphor-react'
import { AddressFormContainer, AddressInput } from './styles'

export function AddressForm() {
  return (
    <AddressFormContainer>
      <div id="titleArea">
        <MapPinLine size={22} />
        <div>
          <p id="title">Endereço de entrega</p>
          <p id="description">
            Informe o endereço onde deseja receber o seu pedido
          </p>
        </div>
      </div>

      <div id="inputsArea">
        <AddressInput type="number" placeholder="CEP" required id="cep" />
        <AddressInput type="text" placeholder="Rua" required id="street" />
        <AddressInput type="number" placeholder="Número" required id="number" />
        <AddressInput type="text" placeholder="Complemento" id="complement" />
        <AddressInput
          type="text"
          placeholder="Bairro"
          required
          id="neighborhood"
        />
        <AddressInput type="text" placeholder="Cidade" required id="city" />
        <AddressInput type="text" placeholder="UF" required id="uf" />
      </div>
    </AddressFormContainer>
  )
}
