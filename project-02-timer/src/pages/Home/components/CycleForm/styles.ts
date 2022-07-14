import styled from 'styled-components'

export const FormContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: ${(props) => props.theme['gray-100']};
  flex-wrap: wrap;
  font-weight: bold;
`

const BaseInput = styled.input`
  background: transparent;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  color: ${(props) => props.theme['gray-500']};
  font-size: 0.875rem;
  font-weight: bold;
  padding: 0.5rem;

  &:focus {
    box-shadow: none;
    border-bottom-color: ${(props) => props.theme['green-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;
`

export const DurationInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};

  svg {
    transition: color 0.2s;

    &:hover {
      color: ${(props) => props.theme['green-500']};
      cursor: pointer;
    }
  }

  &:focus-within {
    box-shadow: none;
    border-bottom-color: ${(props) => props.theme['green-500']};
  }
`

export const DurationInput = styled(BaseInput)`
  width: 4rem;
  border: none;
  text-align: center;
`
