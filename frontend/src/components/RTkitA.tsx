import { VFC } from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { increment, selectCount } from '../slices/counterSlice'

export const RTkitA: VFC = () => {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  console.log('rendered RTkitA')

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold my-3">RTkitA</p>
      {count}
      <button
        className="py-2 px-3 text-sm text-white bg-indigo-600 hover:bg-indigo700 rounded"
        onClick={() => dispatch(increment())}
      >
        increment
      </button>
    </div>
  )
}
