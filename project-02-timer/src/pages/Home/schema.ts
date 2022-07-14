import * as zod from 'zod'

const schema = zod.object({
  task: zod.string().min(1, 'Enter your task'),
  duration: zod.number().min(1, 'Min must be 5').max(60, 'Max must be 60'),
})

export type TaskCycleProps = zod.infer<typeof schema>

export default schema
