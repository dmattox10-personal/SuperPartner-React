import React, { Component } from 'react';

class Nav extends Component {
    render() {
      return (            
        <div id="nav" className="nav">
            <div className="icon">
                <ul>
                    <li><a href="/landing"><i className="fa fa-home "></i></a></li>
                    <li><a href="/locations/Listing"><i className="fa fa-location-arrow "></i></a></li>
                    <li><a href="/machines/Listing"><i className="fa fa-gamepad "></i></a></li>
                        <li><a href="/service"><i className="fa fa-phone "></i></a></li>
                    <li><a href="/vehicles"><i className="fa fa-car "></i></a></li>
                    <li><a href="/search"><i className="fa fa-search" ></i></a></li>
                    <li><a href="/admin"><i className="fa fa-cogs "></i></a></li>
                    <li><a href="/logout"><i className="fa fa-lock "></i></a></li>
                </ul>
            </div>
            <div className="text">
                <ul>
                    <li><a href="/landing" >Landing</a></li>
                    <li><a href="/locations/Listing" >Locations</a></li>
                    <li><a href="/machines/Listing" >Machines</a></li>
                    <li><a href="/Service" >Service</a></li>
                    <li><a href="/Vehicles" >Vehicles</a></li>
                    <li><a href="/Search" >Search</a></li>
                    <li><a href="/Admin" >Admin</a></li>
                    <li><a href="/Logout" >Logout</a></li>
                </ul>
            </div>
        </div>
      )
    }
  }
  
  export default Nav;