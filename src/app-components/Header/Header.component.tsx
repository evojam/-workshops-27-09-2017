import * as React from 'react'

import './Header.css'

const logo = require('../../assets/logo.png')

export class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <img src={logo} className="Header-logo" alt="logo" />
        <h1>#1 Workshop: Optimization</h1>
      </div>
    )
  }
}
