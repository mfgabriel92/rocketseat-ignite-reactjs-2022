import { zodResolver } from '@hookform/resolvers/zod'
import { CyclesContext } from 'contexts/CyclesContext'
import { HandPalm, Play } from 'phosphor-react'
import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Countdown } from './components/Countdown'
import { CycleForm } from './components/CycleForm'
import schema, { TaskCycleProps } from './schema'
import { HomeContainer, StartCycleButton, StopCycleButton } from './styles'

interface NewCycle {
  task: string
  duration: number
}

function Home() {
  const { activeCycle, createCycle, interruptCycle } = useContext(CyclesContext)
  const form = useForm<TaskCycleProps>({
    resolver: zodResolver(schema),
    defaultValues: {
      task: '',
      duration: 0,
    },
  })

  const { handleSubmit, watch, reset } = form
  const isSubmitButtonDisabled = !watch('task')

  function handleCreateCycle(data: NewCycle) {
    createCycle(data)
    reset()
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateCycle)}>
        <FormProvider {...form}>
          <CycleForm />
        </FormProvider>
        <Countdown />

        {!activeCycle ? (
          <StartCycleButton type="submit" disabled={isSubmitButtonDisabled}>
            <Play size={24} /> Start
          </StartCycleButton>
        ) : (
          <StopCycleButton onClick={interruptCycle}>
            <HandPalm size={24} /> Interrupt
          </StopCycleButton>
        )}
      </form>
    </HomeContainer>
  )
}

export { Home }
