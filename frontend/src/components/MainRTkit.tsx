import { VFC } from 'react'
import { RTkitA } from './RTkitA'
import { RTkitB } from './RTkitB'
import { RTkitC } from './RTkitC'
import { RTkitD } from './RTkitD'

export const MainRTkit: VFC = () => {
  return (
    <div className="grid grid-cols-2 gap-40">
      <RTkitA />
      <RTkitB />
      <RTkitC />
      <RTkitD />
    </div>
  )
}
