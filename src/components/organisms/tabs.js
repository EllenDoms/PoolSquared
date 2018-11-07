import React, { Component } from 'react';

export default class Tabs extends Component {
  render() {
    let {items, active} = this.props;
    return (
      <div className="tabs">
      {items.map(item => {
        console.log(item)
        return(
          <div key={item} className={active === item ? 'tab-item active' : 'tab-item'} onClick={() => this.props.action(item)}>{item}</div>
        )
      })}
      </div>
    )
  }
}
