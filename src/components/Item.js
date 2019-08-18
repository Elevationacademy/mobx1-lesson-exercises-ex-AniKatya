import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
  editItem = (e) => {
    prompt("Change the location")
    this.props.store.editItem(e.target.value)
  }
  deleteItem = (e) => {
    this.props.store.deleteItem(e.target.value)
  }
  render() {
    let item = this.props.item
    return (
      <div className={item.completed ? "crossed" : null}>
        <input type="checkbox" onClick = {this.checkItem} 
          value={item.name} />
        {item.name} {item.location} 
        <button className ="editButton" onClick ={this.editItem}>Edit</button>
        <button className ="deleteButton" value = {item.name} onClick ={this.deleteItem}>Delete</button>
      </div>)
  }
}

export default Item