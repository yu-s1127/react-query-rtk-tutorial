import { VFC } from 'react'
import { useHistory } from 'react-router'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'

import { useClassicalFetch } from '../hooks/useClassicalFetch'

export const ClassicalFetchA: VFC = () => {
  const history = useHistory()
  const { isLoading, isError, tasks } = useClassicalFetch()
  console.log('rendered ClassicalFetchA')

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-center font-bold mb-3">ClassicalFetchA</p>
      {isError && <div>Error</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        tasks?.map((task) => <p key={task.id}>{task.title}</p>)
      )}
      <ChevronDoubleRightIcon
        onClick={() => history.push('/fetch-b')}
        className="h-5 w-5 mt-2 text-blue-500 cursor-pointer"
      />
      <p className="text-sm">fetch B</p>
    </div>
  )
}
