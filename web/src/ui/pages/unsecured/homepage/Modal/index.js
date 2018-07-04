import React, { Component } from 'react'

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: props.open
    }
  }

  componentWillReceiveProps(nextprops) {
    if (this.props.open !== nextprops.open)
      this.setState({ open: nextprops.open })
  }

  handleClick = () => {
    console.log('I was clicked')
    this.setState({ open: false })
  }

  render() {
    console.log('Modal--', this.state.open)
    if (!this.state.open)
      return null

    return (
      <div onClick={this.handleClick}>
        <div>
          Hi i'm the Modal
        </div>
      </div>
    )
  }
}

export default Modal