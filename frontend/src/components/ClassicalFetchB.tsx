import { VFC } from 'react'
import { useHistory } from 'react-router-dom'
import { useStateContext } from '../context/StateProvider'
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'

export const ClassicalFetchB: VFC = () => {
  const history = useHistory()
  const { tasks } = useStateContext()
  console.log('rendered ClassicalFetchB')

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-center font-bold mb-3">ClassicalFetchB</p>
      {tasks?.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
      <ChevronDoubleLeftIcon
        onClick={() => history.push('/fetch-a')}
        className="h-5 w-5 mt-2 text-blue-500 cursor-pointer"
      />
      <p className="text-sm">fetch A</p>
    </div>
  )
}
