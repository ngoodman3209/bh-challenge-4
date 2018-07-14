import CSSModules from 'react-css-modules'
import React, { Component } from 'react'
import css from './index.css'
import Modal from './modal'
// var Carousel = require('react-responsive-carousel').Carousel

// import CR1 from './Users/romarioh39/Documents/my_first_web_page/public/index.html'

// TODO Challenge 4 - Create your own homepage with info about the site
// You need to include a modal and have a carousel
// You can use someone else's carousel library/implementation
// But you have to design/build the modal yourself...you can't use anyone else's modal

class homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
      p1: 1,
      p2: 2,
      p3: 3
    }
  }

  toggleModal = () => {
    console.log('state before', this.state)
    this.setState({ isModalOpen: !this.state.isModalOpen })
    console.log('here i am', this.state)
  }

  render() {
    return (
      <div styleName="main-container">
        <div styleName="welcome">
          <p styleName="one">Welcome </p>
          <p styleName="one">Lets CodeIT</p>
        </div>
        <div styleName="main-pics-cont">
          <div>
            <img styleName="car-pix" src={require(`./modal/pix/${this.state.p1}.jpg`)} alt="k" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img styleName="car-pix" src={require(`./modal/pix/${this.state.p2}.jpg`)} alt="k" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img styleName="car-pix" src={require(`./modal/pix/${this.state.p3}.jpg`)} alt="k" />
            <p className="legend">Legend 3</p>
          </div>
        </div>
        <div styleName="buttons-cont">
          <button onClick={() => {
            console.log('Left')
            if (this.state.p1 === 1) {
              this.setState({ p1: 5, p2: 1, p3: 2 })
            } else if (this.state.p2 === 1) {
              this.setState({ p1: 4, p2: 5, p3: 1 })
            } else if (this.state.p3 === 1) {
              this.setState({ p1: 3, p2: 4, p3: 5 })
            } else {
              this.setState({ p1: this.state.p1 - 1, p2: this.state.p2 - 1, p3: this.state.p3 - 1 })
            }
          }} >Left</button>
          <button onClick={() => {
            console.log('Right')
            if (this.state.p1 === 5) {
              this.setState({ p1: 4, p2: 5, p3: 1 })
            } else if (this.state.p2 === 5) {
              this.setState({ p1: 5, p2: 1, p3: 2 })
            } else if (this.state.p3 === 5) {
              this.setState({ p1: 1, p2: 2, p3: 3 })
            } else {
              this.setState({ p1: this.state.p1 + 1, p2: this.state.p2 + 1, p3: this.state.p3 + 1 })
            }
          }} >Right</button>
        </div>
        <div onClick={this.toggleModal}>Open Modal</div>
        <Modal
          isOpen={this.state.isModalOpen}
          toggleModal={this.toggleModal}
        />
      </div>
    )
  }
}

export default CSSModules(homepage, css)

// <img styleName="car-pix" src={require('./modal/pix/2.jpg')} alt="k" />
