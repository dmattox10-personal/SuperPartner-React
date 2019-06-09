import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Machines extends Component {
    render() {
      return (     
        <div> 
            <div id="top" class="top">
	            <ul class="horiz" id="text">
                    <li><Link to="/machines">Listing</Link></li>
                    <li><Link to="/classes">Classes</Link></li>
                    <li><Link to="/names">Names</Link></li>
                    <li><Link to="/manufacturers">Manufacturers</Link></li>
                    <li><Link to="/permits">Permits</Link></li>
                    <li><Link to="/depreciation">Depreciation</Link></li>
                    <li><Link to="/performance">Performance</Link></li>
                    <li><Link to="/vending">Vending</Link></li>
	            </ul>
            </div>  
            <div className="boot">
                <h1>Machines</h1>
            </div>
        </div>
      )
    }
  }
  
  export default Machines;