import React from 'react'

export default function Dot({pos,opacity}:{
    pos:{
        x:number
        ,y:number
    },
    opacity:number
}) {
  return (
    <div style={{
        position:"absolute",
        backgroundColor:"pink",
        borderRadius:"50%",
        opacity,
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
    }}>
    </div>
  )
}
