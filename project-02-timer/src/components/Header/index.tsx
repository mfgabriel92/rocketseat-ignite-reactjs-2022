import { Logo } from '@components/Logo'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <nav>
        <NavLink to="/">
          <Timer size={22} />
        </NavLink>
        <NavLink to="/history">
          <Scroll size={22} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}

export { Header }
