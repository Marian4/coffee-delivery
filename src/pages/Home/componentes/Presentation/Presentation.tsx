import { PresentationContainer, Advantage, AdvantagesContainer } from './Styles'
import introCoffeeImg from '../../../../assets/IntroCoffee.svg'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

export function Presentation() {
  return (
    <PresentationContainer>
      <div id="presentation">
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span id="subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
        </div>
        <AdvantagesContainer>
          <Advantage bgcolor="yellow-dark">
            <span id="icon">
              <ShoppingCart size={16} weight="fill" />
            </span>
            <span id="text">Compra simples e segura</span>
          </Advantage>
          <Advantage bgcolor="yellow">
            <span id="icon">
              <Timer size={16} weight="fill" />
            </span>
            <span id="text">Entrega rápida e rastreada</span>
          </Advantage>
          <Advantage bgcolor="base-text">
            <span id="icon">
              <Package size={16} weight="fill" />
            </span>
            <span id="text">Embalagem mantém o café intacto</span>
          </Advantage>
          <Advantage bgcolor="purple">
            <span id="icon">
              <Coffee size={16} weight="fill" />
            </span>
            <span id="text">O Café chega fresquinho até você</span>
          </Advantage>
        </AdvantagesContainer>
      </div>
      <img src={introCoffeeImg} alt="" />
    </PresentationContainer>
  )
}
