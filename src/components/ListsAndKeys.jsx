import React from 'react'

export default function ListsAndKeys() {
  const names=['Jack','Luffy','Satoshi','Luffy','Ace']
  // const persons=names.map((name,index)=><h1 key={name}>{name}</h1>)
  // const persons=names.map((name,index)=><h1 key={index}>{index+1} {name}</h1>)
   const persons=names.map((name,index)=><h1 key={index}> {name}</h1>)
  return (
    <div>
      {persons}
    </div>
  )
}
