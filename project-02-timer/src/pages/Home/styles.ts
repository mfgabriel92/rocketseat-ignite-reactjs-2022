import { Button } from '@components/Button'
import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

const BaseButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  height: 4rem;
`

export const StartCycleButton = styled(BaseButton)``

export const StopCycleButton = styled(BaseButton)`
  background-color: ${(props) => props.theme['red-500']};
`
