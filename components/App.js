import React from 'react';
import Header from './Header';
import Fish from './Fish';
import Order from './Order';
import Inventory from './Inventory';
import reactMixin from 'react-mixin';
import Catalyst from 'react-catalyst';
import autobind from 'autobind-decorator';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fishes : {},
      order : {}      
    }
  }
  addToOrder(key) {
    this.state.order[key] = this.state.order[key] + 1 || 1;
    this.setState({ order : this.state.order });
  }
  removeFromOrder(key) {
    delete this.state.order[key];
    this.setState({ order : this.state.order });
  }
  removeFish(key) {
    if (confirm('Are you sure?')) {
      delete this.state.fishes[key];
      this.setState({ fishes : this.state.fishes });
    }
  }
  addFish(fish) {
    const timestamp = (new Date()).getTime();
    this.state.fishes['fish-'+timestamp] = fish;
    this.setState({ fishes : this.state.fishes });
  }
  loadSamples () {
    this.setState({
      fishes : require('../sample_fish')
    });
  }
  renderFish(key) {
    return <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder.bind(this)}/>
  }
  render() {
    return (
      <div>  
        <div className="row">
          <div className="col-md-4">
            <Header tagline="Fresh seafood market"/>
            <ul>
              {Object.keys(this.state.fishes).map(this.renderFish.bind(this))}
            </ul>
          </div>
          <div className="col-md-3">
            <Order fishes={this.state.fishes} 
                   order={this.state.order} 
                   removeFromOrder={this.removeFromOrder.bind(this)}/>
          </div>
          <div className="col-md-5">  
            <Inventory linkState={this.linkState.bind(this)} 
                       fishes={this.state.fishes} 
                       addFish={this.addFish.bind(this)} 
                       removeFish={this.removeFish.bind(this)} 
                       loadSamples={this.loadSamples.bind(this)}/>
          </div>  
        </div>
      </div>    
    )  
  }
}

reactMixin.onClass(App, Catalyst.LinkedStateMixin);

export default App
