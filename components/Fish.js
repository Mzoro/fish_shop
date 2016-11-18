import React from 'react';

class Fish extends React.Component {
  onButtonClick() {
    this.props.addToOrder(this.props.index);
  }
  render () {
    const buttonText = (this.props.details.status === 'available' ? 'add to order' : 'sold out!');
    return (
      <li>
        {/* <img src={this.props.details.image} alt={this.props.details.name}/> */}
        <h5>{this.props.details.name}<span>{" - "+this.props.details.price}</span></h5>
        <p>{this.props.details.desc}</p>
        <button disabled={!(this.props.details.status === 'available')} onClick={this.onButtonClick.bind(this)}>{buttonText}</button>
      </li>
    )
  }
}

export default Fish