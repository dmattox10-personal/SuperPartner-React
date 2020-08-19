import React, { useContext } from 'react';

import { spContext } from '../contexts/spContext'

const Landing = props => {

  const { users, activeUser } = useContext(spContext)
  console.log(`Landing: ${activeUser}`)
      return (            
        <div className="boot">
            <h1>Landing</h1>
        </div>
      )
  }
  
  export default Landing;