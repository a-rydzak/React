import React, { Component } from 'react';

class Header extends Component {

 
  render() {
  
    return (
      // dont use class for className
      <div className='Header' >
        <header>
          <ul>
            <h3>This is Not a Header</h3>
            <li>A</li>
            <li>B</li>
            <li>C</li>
          </ul>
        </header>
      </div>
    );
  }
}

export default Header;
