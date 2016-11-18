import React from 'react';

class Header extends React.Component {
  render () {
    return (
      <div>
        <h1>Catch of the Day</h1>
        <h2>{this.props.tagline}</h2>
      </div> 
    )  
  }
}

export default Header