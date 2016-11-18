import React from 'react';

class Order extends React.Component {
  renderOrder(key) {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const removeButton = <button onClick={this.props.removeFromOrder.bind(null, key)}>x</button>
    if (!fish) {
      return (
        <li key={key}>Sorry, fish is not longer available</li>
      )
    }
    return (
      <li key={key}>
        <span>{count+" "}</span>lbs
        {" - "+fish.name+" - "}
        <span>{fish.price * count}</span>
        {removeButton} 
      </li>
    )
  }
  render() {
    const orderIds = Object.keys(this.props.order);

    const total = orderIds.reduce((prevTotal, key) => {
      const count = this.props.order[key];
      const fish = this.props.fishes[key];
      const isAvailable = fish && fish.status === "available";
      if (isAvailable) {
        return prevTotal + (count * fish.price);
      }
      return prevTotal;  
    }, 0);
    return (
      <div>
        <h3>Order</h3>
        <ul>
          {orderIds.map(this.renderOrder.bind(this))}
          <li>
            <strong>Total:</strong>
            {" - "+total} 
          </li>
        </ul>
      </div>
    )  
  }
}

export default Order