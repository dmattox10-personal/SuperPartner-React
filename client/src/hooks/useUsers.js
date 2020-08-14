import { useState, useEffect } from 'react'
import PouchDB from 'pouchdb-browser'
import * as bcrypt from 'bcryptjs'
import { useHistory } from 'react-router-dom'

import { useRemote } from './useRemote'

export const useUsers = () => {

    const history = useHistory()
    const [users, updateUsers] = useState(null) // We'll find out if this works!
    const [activeUser, setActiveUser] = useState(null)
    const userDB = new PouchDB('users')
    const [remotesList] = useRemote('users')

    useEffect(() => {
        userDB.info().then( info => {
            if (info.doc_count > 0) {
                userDB.allDocs({
                    include_docs: true
                }).then(results => {
                    updateUsers(results.rows)
                })
            }
        })
    }, [])

    const addUser = values => {
        const { username, password } = values
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const user = {
            "_id": username,
            "username": username,
            "password": hash,
            "role": "admin"
        }
        userDB.put(user)
        history.push('/login')
    }

    const updateUser = values => {

    }

    const deleteUser = user => {

    }

    const loginActiveUser = values => {
        const { username, password } = values
        userDB.get(username).then(user => {
            if (bcrypt.compareSync(password, user.password)) {
                setActiveUser(user)
                console.log(user)
                history.push('/landing')
                
            }
            else {
                console.log(user, username, password)
            }
        })
    }

    const logoutActiveUser = () => {

    }

    return [activeUser, users, addUser, updateUser, deleteUser, loginActiveUser, logoutActiveUser]
}