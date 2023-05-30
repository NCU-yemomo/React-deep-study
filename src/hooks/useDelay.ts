import { useEffect , useState } from "react";

//通用的延迟状态hook
export default function (value:any,delay:number){
    const [pos,setPos] = useState(value)

    useEffect(()=>{
        setTimeout(()=>{
            setPos(value)
        },delay)
    },[value])
    
    return pos
}