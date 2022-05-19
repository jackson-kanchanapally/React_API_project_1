import React, { Component } from 'react'

export default class Form extends Component {
    constructor (props)
    {
        super(props)
        this.state={
            username: '',
            about:'',
            topic:'none',
            accept:false
            
        }
    }
    handleChange=(e,fieldname,isCheckbox)=>{
            this.setState({
                // [fieldname]:isCheckbox?e.target.checked:e.target.value
                 [e.target.name]:isCheckbox?e.target.checked:e.target.value
           })
         }
        // handleUsernameChange=e=>{
        //     this.setState({
        //         username:e.target.value
        //     })
        // }
        // handleTextChange=e=>{
        //     this.setState({
        //         about:e.target.value
        //     })
        // }
        // handleTopicChange=e=>{
        //     this.setState({
        //         topic:e.target.value
        //     })
        // }
        sub=()=>{
            alert(`${this.state.username} , ${this.state.about} , ${this.state.topic} ${this.state.accept}`)
        }
        // Accepted=(e)=>{
        //     this.setState({
        //         accept:e.target.checked
            
        //     })
        // }
  render() {
    return (
      <form onSubmit={this.sub}>
          {/* <div>
              <label>UserName : </label>
              <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
              
          </div> */}
          {/* <div>

              <label>UserName : </label>
              <input name="name" type="text" value={this.state.username} onChange={e=>{this.handleChange(e,'username')}}/>
              
          </div> */}
          <div>

              <label>UserName : </label>
              <input name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
              
          </div>
          <div>
              <label>TExt : </label>
              <textarea name="about" value={this.state.about} onChange={this.handleChange}></textarea>
              </div>
              <div>
                  <div>
                      <select name="topic" value={this.state.topic} onChange={this.handleChange}>
                          <option value="none">none</option>
                          <option value="react">React</option>
                          <option value="next.js">Next.js</option>
                          <option value="Angular">Angular</option>
                      </select>
                      
                  </div>
                  <input name="accept" type="checkbox" checked={this.state.accept} onChange={this.handleChange}/>
                  <div>
              <button type="submit">Submit</button></div>
              </div>
      </form>
    )
  }
}
