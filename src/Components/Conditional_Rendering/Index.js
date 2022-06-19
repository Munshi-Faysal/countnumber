import React, { Component } from 'react'
import HomePage from './HomePage'
import { LoginPage } from './LoginPagej'

 class Conditional_Rendering extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true
      }
    }
  render() {
    var {isLoggedIn} = this.state
    return (
      <div>
        {isLoggedIn?<HomePage />:<LoginPage />}
      </div>
    )
  }
}
export default Conditional_Rendering
