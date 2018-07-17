// TODO Challenge 4 - see below DIANNE - DONE
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import CSSModules from 'react-css-modules'

import css from './index.css'
import connected from 'State/connect'

class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      parentValue: ''
    }
  }

  handleZipChange = (event) => {
    event.preventDefault()
    this.setState({ parentValue: event.target.value })
  }
  render() {
    // Add another Link (react-router) to the page for the string manipulation challenge - ADDED LINK FOR STRING MANIPULATION
    return (
      <div styleName="container">
        <h1>Challenges</h1>
        <ol>
          <li>
            <Link to="/challenges/pyramid">Pyramid Challenge</Link>
          </li>
        </ol>
        <h1>String Manipulation</h1>
        <ol>
          <li>
            <Link to="/challenges/string-manipulations"> String Manipulation </Link>
          </li>
        </ol>
      </div>
    )
  }
}

export default withRouter(connected([], [])(CSSModules(LandingPage, css)))
