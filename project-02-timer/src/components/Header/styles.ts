import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      color: ${(props) => props.theme['gray-300']};
      width: 3rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      transition: all 0.2s;

      &:hover {
        border-bottom-color: ${(props) => props.theme['green-500']};
      }

      &.active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`
