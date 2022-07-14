import { CyclesContext } from 'contexts/CyclesContext'
import { differenceInSeconds } from 'date-fns'
import { useContext, useEffect } from 'react'
import { TimerContainer, TimerSeparator } from './styles'

function Countdown() {
  const { activeCycle, activeCycleId, totalSecondsElapsed, setTotalSeconds, concludeCycle } =
    useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.duration * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - totalSecondsElapsed : 0
  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60
  const formattedMinutes = String(minutesAmount).padStart(2, '0')
  const formattedSeconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const difference = differenceInSeconds(new Date(), new Date(activeCycle.startedAt))

        if (difference >= totalSeconds) {
          concludeCycle()
          setTotalSeconds(totalSeconds)
          clearInterval(interval)
        } else {
          setTotalSeconds(difference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, activeCycleId, totalSeconds, setTotalSeconds, concludeCycle])

  useEffect(() => {
    if (activeCycle) {
      document.title = `${formattedMinutes}:${formattedSeconds}`
    } else {
      document.title = 'Ignite Timer'
    }
  }, [formattedMinutes, formattedSeconds, activeCycle])

  return (
    <TimerContainer>
      <span>{formattedMinutes[0]}</span>
      <span>{formattedMinutes[1]}</span>
      <TimerSeparator>:</TimerSeparator>
      <span>{formattedSeconds[0]}</span>
      <span>{formattedSeconds[1]}</span>
    </TimerContainer>
  )
}

export { Countdown }
