import { useState } from "react";

export default function (initInput:string){
    const [value,setValue] = useState(initInput)   
    const handleInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }
    return {
        value,
        onChange:handleInput
    }
}