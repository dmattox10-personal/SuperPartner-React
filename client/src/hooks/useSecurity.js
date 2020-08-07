import { useState, useEffect } from 'react'
import PouchDB from 'pouchdb-browser'

export const useSecurity = user => {

    const [auth, setAuth] = useState(null)

    const activeUser = () => {
        return auth
    }

    const loginActiveUser = (username, password) => {

    }

    const logoutActiveUser = user => {

    }

    const updateActiveUser = user => {

    }

    const registerUser = user => {

    }
    
    return [activeUser, loginActiveUser, logoutActiveUser, updateActiveUser, registerUser]
}