import { useState,useEffect } from "react";
export default function useOnlineStatus (){
    const [isOnline,setIsOnline] = useState(true)
    useEffect(()=>{
      const handleOnline=()=>{
        setIsOnline(true)
      }
      const handleOffline=()=>{
        setIsOnline(false)
      }

      //监听，该hook启动的时候便进行监听
      window.addEventListener("online",handleOnline)
      window.addEventListener("offline",handleOffline)
      return ()=>{
        //该hook不再挂载的时候取消监听
        window.removeEventListener("online",handleOnline)
        window.removeEventListener("offline",handleOffline)
      }
    })
    return isOnline
}