import CSSModules from 'react-css-modules'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import css from './index.css'

const { bool, func } = PropTypes

class Modal extends Component {
 static propTypes = {
   isOpen: bool.isRequired,
   toggleModal: func.isRequired
 }
 render() {
   if (!this.props.isOpen)
     return null

   return (
     <div styleName="overlay">
       <div styleName="modalContent">
         Hi I am the Modal
         <div onClick={this.props.toggleModal}>
          Close Modal
         </div>
       </div>
     </div>
   )
 }
}

export default CSSModules(Modal, css)

// <img styleName="car-pix" src={require('./modal/pix/2.jpg')} alt="k" />
