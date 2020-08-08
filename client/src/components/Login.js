import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { spContext } from '../contexts/spContext'

const Login = props => {

    const history = useHistory()
    const { users, activeUser } = useContext(spContext)
    if (users === null && activeUser === null) {
        history.push('/setup')
    }
    return (
        <div>
            <h1>Login</h1>
            <h1>{users}</h1><h1>{activeUser}</h1>
        </div>
    )
}

export default Login