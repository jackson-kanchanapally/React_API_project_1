import React,{useState} from 'react'

export default function Sub() {
const [sub,setSub]=useState("subscribe")
const [text,setText]=useState("Hello")
  return (
    <div>
        <h1>{text}</h1>
        <button onClick={()=>{setSub("subscribed")
    setText("ThankYou For Subscribing...")}}>{sub}</button>
    </div>
  )
}
