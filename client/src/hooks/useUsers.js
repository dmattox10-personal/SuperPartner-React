import { useState, useEffect } from 'react'
import PouchDB from 'pouchdb-browser'

import { useRemote } from './useRemote'

export const useUsers = () => {

    const [users, updateUsers] = useState(null) // We'll find out if this works!
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

    const addUser = data => {

    }

    const updateUser = data => {

    }

    const deleteUser = data => {

    }

    return [users, addUser, updateUser, deleteUser]
}