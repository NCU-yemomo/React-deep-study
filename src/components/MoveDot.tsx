import React from 'react'
import css from "./index.module.css"
import usePosition from '../hooks/usePosition'
import Dot from './Dot'
import useDelay from '../hooks/useDelay'
export default function MoveDot() {
    const pos = usePosition()
    const pos2 = useDelay(pos,100)
    const pos3 = useDelay(pos,200)
    const pos4 = useDelay(pos,300)
    const pos5 = useDelay(pos,400)
  return (
    <>
      <Dot pos={pos} opacity={1} ></Dot>
      <Dot pos={pos2} opacity={0.8}></Dot>
      <Dot pos={pos3} opacity={0.6}></Dot>
      <Dot pos={pos4} opacity={0.4}></Dot>
      <Dot pos={pos5} opacity={0.2}></Dot>
    </>
  )
}
