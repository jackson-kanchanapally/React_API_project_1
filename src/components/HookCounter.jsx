import React,{useState} from 'react'

export default function HookCounter() {
    // const [items,setItem]=useState([])
    const [add,setAdd]=useState("add item")
    const a=[]
    const [items,setItem]=useState(a)
    const addItem=()=>{
        setItem([...items,
        {
            id:items.length,
            value:Math.floor(Math.random()*10+1)
        }])
        
    }
 
  return (
    <div>
        
        <hr />
        
        {/* <button onClick={addItem}>add Item</button> */}
        <button onClick={()=>{{addItem()}setAdd("added")}}>{add}</button>
        <button onClick={()=>setItem(a)}>clear all</button>
        <ul>
            {items.map(item=>(
                <li key={item.id}>{item.value}</li>
            ))}
        </ul>
    </div>
  )
}
