// Component Code Goes Here

import React from 'react';
import ReactDOM from 'react-dom';
 
import Address from './components/Address';
 

    class Address extends React.Component {
      render() {
        return (
          <div className="address">{this.props.street}, {this.props.city}</div>
        );
      }
    }

ReactDOM.render(
  <Address 
    street="Santa Monica Blvd."
    city="Santa Monica"
  />,
  document.getElementById('root')
);

