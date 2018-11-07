import React, { Component } from 'react';

export default class Tabs extends Component {
  render() {
    let active = this.props.active;
    return (
      <div className="tabs">
        <button id="edit" className={active === "edit" ? 'nav-item active' : 'nav-item'} onClick={() => this.props.action('edit') } >
          <div className="label">Edit</div>
        </button>
        <button id="qr" className={active === "qr" ? 'nav-item active' : 'nav-item'} onClick={() => this.props.action('qr')}>
          <div className="label">Link</div>
        </button>
      </div>
    )
  }
}
