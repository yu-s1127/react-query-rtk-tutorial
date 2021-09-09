import { VFC } from 'react'
import { useAppDispatch } from '../app/hooks'
import { toggleMode } from '../slices/counterSlice'

export const RTkitC: VFC = () => {
  const dispatch = useAppDispatch()
  console.log('rendered RTkitC')

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold my-3">RTkitC</p>
      <button
        className="py-2 px-3 text-sm text-white bg-indigo-600 hover:bg-indigo700 rounded"
        onClick={() => dispatch(toggleMode())}
      >
        toggle mode
      </button>
    </div>
  )
}
