import React, { Component } from 'react'

const initialState={
    name:"",
    email:"",
    password:"",
    nameError:"",
    emailError:"",
    passwordError:"",
    color:""
}

export default class ValidationForm extends Component {
    constructor(props)
    {
        super(props)
        this.state=initialState
    }
    handleChange=(e,fieldname,name)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    validate=()=>{
        let nameError=""
        let emailError=""
        let passwordError=""
       
        if(!this.state.name)
        {
            nameError="Cannot be blank"
            
        }
        if(!this.state.email.includes('@'))
        {
            emailError="invalid email"
            // em={borderColor:"red"}
        }
        if(this.state.password.length<8)
        {
            passwordError="Too Small"
        }
        if(emailError||nameError||passwordError)
        {
            this.setState({emailError,nameError,passwordError})
            this.setState({color:'red'})
            return false
        }
        return true
    }
    sub=(e)=>{
        e.preventDefault()
        const isValid=this.validate()
        if(isValid) {
        console.log(this.state)
        this.setState(initialState)
        }
    }
    render() {
    return (
      <form onSubmit={this.sub}>
          <div>
          {/* <label>Name : </label>
          <input style={!this.state.name?{borderColor:"red"}:{}}type="text" name="name" placeholder='name' value={this.state.name} onChange={this.handleChange}/> */}
          <label>Name : </label>
          <input style={{borderColor:this.state.color}}type="text" name="name" placeholder='name' value={this.state.name} onChange={this.handleChange}/>
          </div>

         <div style={{color:"red"}}>{this.state.nameError}</div>

          <div>
          <label>Email : </label>
          <input style={{borderColor:this.state.color}} type="text" name="email" placeholder='email' value={this.state.email} onChange={this.handleChange} />
          </div>
          <div  style={{color:"red"}}>{this.state.emailError}</div>
          <div>
          <label>Password : </label>
          <input style={{borderColor:this.state.color}} type="password" name="password" placeholder='password' value={this.state.password} onChange={this.handleChange}/>
          </div>
          <div style={{color:"red"}}>{this.state.passwordError}{this.state.passwordError}</div>
          <button type="submit">Submit</button>
              
      </form>
    )
  }
}
