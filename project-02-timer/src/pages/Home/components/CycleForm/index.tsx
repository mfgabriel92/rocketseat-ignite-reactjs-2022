import { CyclesContext } from 'contexts/CyclesContext'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { FormContent, TaskInput, DurationInputContainer, DurationInput } from './styles'

function CycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContent>
      <label htmlFor="task">I will work on</label>
      <TaskInput
        id="task"
        placeholder="Name your task"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <label htmlFor="durationInMinutes">for</label>
      <DurationInputContainer>
        <DurationInput
          id="durationInMinutes"
          type="number"
          step={5}
          disabled={!!activeCycle}
          placeholder="00"
          {...register('duration', { valueAsNumber: true })}
        />
      </DurationInputContainer>
      <span>minutes.</span>
    </FormContent>
  )
}

export { CycleForm }
