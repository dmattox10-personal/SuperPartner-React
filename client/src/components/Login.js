import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { spContext } from '../contexts/spContext'

const Login = props => {

    const { users } = useContext(spContext)
    let history = useHistory()
    if (users === null) {
        history.push('/setup')
    }
    return (
        <div>
            <h1>Login</h1>
        </div>
    )
}

export default Login