import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <nav>
        <div id="location">
          <MapPin size={24} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>
        <NavLink id="cartIcon" to="/checkout">
          <ShoppingCart size={24} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
