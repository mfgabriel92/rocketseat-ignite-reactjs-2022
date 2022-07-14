import { createContext, ReactNode, useEffect, useReducer, useState } from 'react'
import {
  concludeCycleAction,
  createCycleAction,
  interruptCycleAction,
} from 'reducers/cycles/actions'
import { Cycle, cyclesReducer } from 'reducers/cycles/reducer'

interface NewCycle {
  task: string
  duration: number
}

interface CyclesContextProps {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  totalSecondsElapsed: number
  setTotalSeconds: (n: number) => void
  createCycle: (data: NewCycle) => void
  concludeCycle: () => void
  interruptCycle: () => void
}

interface CyclesProviderProps {
  children: ReactNode
}

const CyclesContext = createContext({} as CyclesContextProps)

function CyclesProvider({ children }: CyclesProviderProps) {
  const [totalSecondsElapsed, setTotalSecondsElapsed] = useState<number>(0)
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    () => {
      const storedCycles = localStorage.getItem('@igniteTimer:cycles_v1.0.0')

      if (storedCycles) {
        return JSON.parse(storedCycles)
      }
    },
  )

  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles.find((cycle: Cycle) => cycle.id === activeCycleId)

  useEffect(() => {
    localStorage.setItem('@igniteTimer:cycles_v1.0.0', JSON.stringify(cyclesState))
  }, [cyclesState])

  function createCycle(data: NewCycle) {
    if (!activeCycle) {
      const id = String(new Date().getTime())
      const cycle: Cycle = {
        id,
        task: data.task,
        duration: data.duration,
        startedAt: new Date(),
      }

      dispatch(createCycleAction(cycle))
      setTotalSecondsElapsed(0)
    }
  }

  function concludeCycle() {
    dispatch(concludeCycleAction())
  }

  function interruptCycle() {
    dispatch(interruptCycleAction())
  }

  function setTotalSeconds(n: number) {
    setTotalSecondsElapsed(n)
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        totalSecondsElapsed,
        setTotalSeconds,
        concludeCycle,
        interruptCycle,
        createCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}

export { CyclesContext, CyclesProvider }
