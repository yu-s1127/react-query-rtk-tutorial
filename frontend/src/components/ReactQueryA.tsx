import { VFC } from 'react'
import { useQueryTasks } from '../hooks/useQueryTasks'
import { useHistory } from 'react-router'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'

export const ReactQueryA: VFC = () => {
  console.log('rendered ReactQueryA')
  const history = useHistory()
  const { status, data } = useQueryTasks()

  if (status === 'loading') return <div>{'Loading...'}</div>
  if (status === 'error') return <div>{'Error'}</div>

  return (
    <>
      <p className="font-bold my-3">ReactQueryA</p>
      {data?.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
      <ChevronDoubleRightIcon
        onClick={() => history.push('/query-b')}
        className="h-5 w-5 mt-2 text-blue-500 cursor-pointer"
      />
      <p className="text-sm">react query B</p>
    </>
  )
}
