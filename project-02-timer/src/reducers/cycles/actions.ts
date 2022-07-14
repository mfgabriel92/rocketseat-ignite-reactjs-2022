import { Cycle } from './reducer'

/* eslint-disable no-unused-vars */
enum Actions {
  CREATE_CYCLE = 'CREATE_CYCLE',
  INTERRUPT_CYCLE = 'INTERRUPT_CYCLE',
  CONCLUDE_CYCLE = 'CONCLUDE_CYCLE',
}

function createCycleAction(cycle: Cycle) {
  return {
    type: Actions.CREATE_CYCLE,
    payload: {
      cycle,
    },
  }
}

function concludeCycleAction() {
  return {
    type: Actions.CONCLUDE_CYCLE,
  }
}

function interruptCycleAction() {
  return {
    type: Actions.INTERRUPT_CYCLE,
  }
}

export { Actions, createCycleAction, concludeCycleAction, interruptCycleAction }
