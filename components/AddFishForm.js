import React from 'react';

class AddFishForm extends React.Component {
  createFish(event) {
    event.preventDefault();
    let fish = {
      name : this.refs.name.value,
      price : this.refs.price.value,
      status : this.refs.status.value,
      desc : this.refs.desc.value,
      image : this.refs.image.value
    }
  this.props.addFish(fish);
  this.refs.fishForm.reset();
  }
  render() {
    return (
      <form ref="fishForm" onSubmit={this.createFish.bind(this)} >
        <input type='text' ref='name' placeholder="Fish Name"/>
        <input type='text' ref='price' placeholder="Fish Price"/>
        <select ref="status">
          <option value="available">fresh!</option>
          <option value="unavailable">sold out!</option>
        </select>
        <textarea type='text' ref='desc' placeholder="Desc"/>
        <input type='text' ref='image' placeholder="URL to image"/>
        <button type='Submit'>+ Add fish</button>
      </form>  
    )  
  }
}

export default AddFishForm