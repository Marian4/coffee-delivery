import { HeaderContainer } from './styles'
import logo from '../../assets/Logo.svg'
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
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>
        <NavLink id="cartIcon" to="/checkout">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
