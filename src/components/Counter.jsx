import React ,{useState} from 'react'

export default function Counter() {
    const def=0
    const [count,setCount]=useState(def)
    
    const incFive=()=>{
        for(let i=0;i<5;i++)
        {setCount(count=>count+1)}
        
    }
    
  return (
    <div>
        count : {count}
        <button onClick={()=>setCount(def)}>Reset</button>
        <button onClick={()=>setCount(count=>count+1)}>Increment</button>
        <button onClick={()=>setCount(count=>count-1)}>Decreament</button>
        <button onClick={()=>incFive()}>Increment 5</button>
       
        
    </div>
  )
}
