// TODO Challenge 4

// Create a parent container component
//    Have an input that will take a phrase and pass it's value down to its two children (save the input data to redux-saga state tree)
//    Have two children components (make the folders here)
//        One that will show the reverse of the string
//            This component should have a radio input that will change the direction from being normal to reverse (only use props & comp state)
//            It should effect both it's output but also the output for the filtered component
//        One that will filter out characters from the string
//            This component will have an additional input that will be used to filter characters (only use props & comp state)

// TODO Challenge 4 - see below DIANNE - started the string-manipulation page - redux-saga state tree has not been added.
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import CSSModules from 'react-css-modules'

import css from './index.css'
import connected from 'State/connect'

class StringManipulation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      parentValue: ''
    }
  }

  handleZipChange = (event) => {
    event.preventDefault()
    this.setState({
      parentValue: event.target.value
    })
  }
  render() {
    return (
      <div styleName="container">
        <h1>String Manipulation</h1>
        <ol>
          <li>
            <Link to="/challenges/string-manipulations">String Manipulation</Link>
          </li>
        </ol>
      </div>
    )
  }
}

export default withRouter(connected([], [])(CSSModules(StringManipulation, css)))
