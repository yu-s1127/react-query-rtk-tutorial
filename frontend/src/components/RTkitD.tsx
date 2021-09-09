import { VFC } from 'react'
import { useAppSelector } from '../app/hooks'
import { selectMode } from '../slices/counterSlice'

export const RTkitD: VFC = () => {
  const mode = useAppSelector(selectMode)
  console.log('rendered RTkitD')

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold my-3">RTkitD</p>
      <p className="text-blue-500">{mode ? 'mode on' : 'mode off'}</p>
    </div>
  )
}
