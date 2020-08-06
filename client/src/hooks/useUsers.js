import { useState, useEffect } from 'react'
import PouchDB from 'pouchdb-browser'

export const useUsers = () => {

    const [users, updateUsers] = useState([])

    useEffect(() => {
        const userDB = new PouchDB('users')
    }, [])

    const addUser = data => {

    }

    const updateUser = data => {

    }

    const deleteUser = data => {

    }

    return [users, addUser, updateUser, deleteUser]
}