import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Locations extends Component {
    render() {
      return (  
        <div>        
            <div id="top" class="top">
	            <ul class="horiz" id="text">
                    <li><Link to="/locations">Listing</Link></li>
                    <li><Link to="/taxes">Taxes</Link></li>
                    <li><Link to="/routes">Routes</Link></li>
                    <li><Link to="/expenses">Expenses</Link></li>
                    <li><Link to="/chains">Chains</Link></li>
                    <li><Link to="/thirdparties">Third Parties</Link></li>
                    <li><Link to="/userids">User ID's</Link></li>
                    <li><Link to="/collectors">Collectors</Link></li>
	            </ul>
            </div>  
            <div className="boot">
                <h1>Locations</h1>
            </div>
        </div>
      )
    }
  }
  
  export default Locations;