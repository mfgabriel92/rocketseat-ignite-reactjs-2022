import { CyclesContext } from 'contexts/CyclesContext'
import { formatDistanceToNow } from 'date-fns'
import { useContext } from 'react'
import { HistoryContainer, HistoryListContainer, StatusIndicator } from './styles'

function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>My history</h1>
      <HistoryListContainer>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Started</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles?.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.duration} minute(s)</td>
                <td>
                  {formatDistanceToNow(new Date(cycle.startedAt), {
                    addSuffix: true,
                  })}
                </td>
                <td>
                  {cycle.concludedAt && (
                    <StatusIndicator statusColor="green">Completed</StatusIndicator>
                  )}

                  {cycle.interruptedAt && (
                    <StatusIndicator statusColor="red">Interrupted</StatusIndicator>
                  )}

                  {!cycle.concludedAt && !cycle.interruptedAt && (
                    <StatusIndicator statusColor="yellow">On going</StatusIndicator>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryListContainer>
    </HistoryContainer>
  )
}

export { History }
