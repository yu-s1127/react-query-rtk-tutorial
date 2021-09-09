import { VFC } from 'react'
import { useAppDispatch } from '../app/hooks'
import { increment } from '../slices/counterSlice'

export const RTkitB: VFC = () => {
  const dispatch = useAppDispatch()
  console.log('rendered RTkitB')

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold my-3">RTkitB</p>
      <button
        className="py-2 px-3 text-sm text-white bg-indigo-600 hover:bg-indigo700 rounded"
        onClick={() => dispatch(increment())}
      >
        increment
      </button>
    </div>
  )
}
