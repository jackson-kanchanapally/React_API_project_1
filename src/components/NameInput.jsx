import React,{useState} from 'react'
export default function NameInput(){
    const [name,setName]=useState({firstname:"",lastname:""})

    return(
        <React.Fragment>
            {/* <input type="text" value={name.firstname} onChange={(e)=>{setName({firstname:e.target.value})}} /> */}
            {/* <input type="text" value={name.Lastname} onChange={(e)=>{setName({lastname:e.target.value})}} /> */}
            <input type="text" value={name.firstname} onChange={(e)=>{setName({...name,firstname:e.target.value})}} />
            <input type="text" value={name.lastname} onChange={(e)=>{setName({...name,lastname:e.target.value})}} />
            <h1>Your First Name : {name.firstname}</h1>
            <h1>Your last Name : {name.lastname}</h1>
        </React.Fragment>
    )
}