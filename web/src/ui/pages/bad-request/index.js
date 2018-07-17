import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import CSSModules from 'react-css-modules'

// import * as process from './process'
import css from './index.css'
import connected from 'State/connect'

class BadRequest extends Component {
  // TODO Challenge 4 create an error page.- DIANNE added sadFace.jpg, bad request code, and css file with animation and @media for mobile view.
  // You must use an image, have text on the screen, a link to your login/sign up pages
  // and something that is using animation
  render() {
    return (
      <div>
        <h1> 400 - Bad Request - The page is not available </h1>
        <img src={require('./sadFace.png')} styleName="sadFace" alt="sad" />
        <p>
          {/* <Link to="Login">Login Page</Link> */}
        </p>
      </div>
    )
  }
}

export default withRouter(connected([], [])(CSSModules(BadRequest, css)))
