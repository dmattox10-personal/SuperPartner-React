import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { spContext } from '../contexts/spContext'

const PrivateRoute = ({ component: Component, ...rest }) => {

    const { activeUser } = useContext(spContext)
    return (
        <Route
          {...rest}
          render={() => {
            if (activeUser !== null) {
              return <Component />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
    )
}

export default PrivateRoute