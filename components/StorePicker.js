import React from 'react';
import { browserHistory } from 'react-router';


class StorePicker extends React.Component {
  goToStore(event) {
    event.preventDefault()
    const storeId = this.refs.storeId.value
    const path = `/store/${storeId}`
    browserHistory.push(path)
  }
  render() {
    return (
      <form onSubmit={this.goToStore.bind(this)}>
        <h2>Please enter a store</h2>
        <input type='text' ref='storeId' default Value="test-nest-67" required />
        <input type='Submit' />
      </form>  
    )  
  }
}

export default StorePicker