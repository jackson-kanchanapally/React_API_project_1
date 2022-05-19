import React from 'react'

export default function Person() {
    const persons=[
        {
            id: 1,
            name:"jackson",
            num:6354
        },
        {
            id: 2,
            name:"json",
            num:3354,
        },
        {
            id: 3,
            name:"son",
            num:2354
        },
        {
            id: 4,
            name:"jack",
            num:1354
        },
    ]
  return (
    <div>
        {persons.map(person=> <h1>{person.name}</h1>)}
    </div>
  )
}
