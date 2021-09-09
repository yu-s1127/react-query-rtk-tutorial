import { VFC } from 'react'
import { useQueryClient } from 'react-query'
import { useHistory } from 'react-router'
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'

import { Task } from '../types/types'

export const ReactQueryB: VFC = () => {
  console.log('rendered ReactQueryB')
  const history = useHistory()
  const queryClient = useQueryClient()
  const data = queryClient.getQueryData<Task[]>('tasks')

  return (
    <>
      <p className="font-bold my-3">ReactQueryB</p>
      {data?.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
      <ChevronDoubleLeftIcon
        onClick={() => history.push('/')}
        className="h-5 w-5 mt-2 text-blue-500 cursor-pointer"
      />
      <p className="text-sm">react query A</p>
    </>
  )
}
