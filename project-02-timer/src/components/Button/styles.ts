import { HTMLProps } from 'react'
import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps extends HTMLProps<HTMLButtonElement> {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button.attrs((props) => ({
  disabled: props.disabled,
  type: props.type,
}))<ButtonContainerProps>`
  width: 6rem;
  height: 2.5rem;
  border-radius: 4px;
  margin: 0.5rem;
  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};
`
