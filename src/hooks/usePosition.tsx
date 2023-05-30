import {useEffect,useState} from 'react'

export default function usePosition() {
    const [pos,setPos] = useState({x:0,y:0})
    
    useEffect(()=>{
        const handle = (e:any) => {
            // your code here
            setPos({x:e.clientX,y:e.clientY})
        }
        window.addEventListener("pointermove",handle)
    })
    return pos
}
