import React, { Component } from 'react';

class Nav extends Component {
    render() {
      return (            
        <div id="nav" className="nav">
            <div className="icon">
                <ul>
                    <li><a href="/landing"><i className="fa fa-home "></i></a></li>
                    <li><a href="/locations"><i className="fa fa-location-arrow "></i></a></li>
                    <li><a href="/machines"><i className="fa fa-gamepad "></i></a></li>
                    <li><a href="/service"><i className="fa fa-phone "></i></a></li>
                    <li><a href="/vehicles"><i className="fa fa-car "></i></a></li>
                    <li><a href="/reporting"><i className="fas fa-file-alt "></i></a></li>
                </ul>
            </div>
            <div className="text">
                <ul>
                    <li><a href="/landing" >Landing</a></li>
                    <li><a href="/locations/Listing" >Locations</a></li>
                    <li><a href="/machines/Listing" >Machines</a></li>
                    <li><a href="/service" >Service</a></li>
                    <li><a href="/vehicles" >Vehicles</a></li>
                    <li><a href="/reporting" >Reporting</a></li>
                </ul>
            </div>
        </div>
      )
    }
  }
  
  export default Nav;