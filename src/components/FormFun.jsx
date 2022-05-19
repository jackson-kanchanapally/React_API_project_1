import React,{useState} from 'react'

export default function FormFun() {
    const [detail,setDetails]=useState({username:"",about:"",topic:""})
    const changeTopic=(e)=>{
        setDetails({...detail,topic:e.target.value})
    }
    const sub=()=>{
        alert(`${detail.username} ${detail.about} ${detail.topic}`)
    }
  return (
    <form onSubmit={sub}>
        <div>
            <label>Username : </label>
            <input type="text" value={detail.username} onChange={(e)=>{setDetails({...detail, username:e.target.value})}}/>
            <label>About : </label>
            <textarea value={detail.about} onChange={(e)=>{setDetails({...detail,about:e.target.value})}}></textarea>
            <label>Topic : </label>
            <select value={detail.topic} onChange={changeTopic}>
                <option value="none">None</option>
                <option value="React.js">React.js</option>
                <option value="Next.js">Next.js</option>
            </select>
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
    </form>
  )
}
