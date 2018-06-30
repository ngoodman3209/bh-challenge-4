// TODO Challenge 4 - Create your own homepage with info about the site
// You need to include a modal and have a carousel
// You can use someone else's carousel library/implementation
// But you have to design/build the modal yourself...you can't use anyone else's modal

import React, { Component } from 'react'

class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: props.open
    }
  }
  render() {
    if (!this.props.open)
      return null


    return (
      <div onClick={this.handleClick}>
          <div>
            Hi i'm the modal
          </div>
      </div>
    )
  }
}

export default Homepage
