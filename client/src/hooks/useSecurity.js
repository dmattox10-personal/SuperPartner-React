import { useState, useEffect } from 'react'
import PouchDB from 'pouchdb-browser'

export const useSecurity = () => {

    const [activeUser, setActiveUser] = useState(null)

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