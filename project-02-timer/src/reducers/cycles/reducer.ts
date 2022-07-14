import { produce } from 'immer'
import { Actions } from './actions'

export interface Cycle {
  id: string
  task: string
  duration: number
  startedAt: Date
  interruptedAt?: Date
  concludedAt?: Date
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

function cyclesReducer(state: CyclesState, action: any) {
  switch (action.type) {
    case Actions.CREATE_CYCLE:
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.cycle)
        draft.activeCycleId = action.payload.cycle.id
      })
    case Actions.INTERRUPT_CYCLE: {
      const i = state.cycles.findIndex((cycle) => cycle.id === state.activeCycleId)

      if (i === -1) {
        return state
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[i].interruptedAt = new Date()
      })
    }
    case Actions.CONCLUDE_CYCLE: {
      const i = state.cycles.findIndex((cycle) => cycle.id === state.activeCycleId)

      if (i === -1) {
        return state
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[i].concludedAt = new Date()
      })
    }
  }

  return state
}

export { cyclesReducer }
