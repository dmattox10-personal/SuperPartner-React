import { useState, useEffect } from 'react'

export const useUsers = () => {

    const [users, updateUsers] = useState([])

    useEffect(() => {

    }, [])

    const addUser = data => {

    }

    const updateUser = data => {

    }

    const deleteUser = data => {

    }

    return [users, addUser, updateUser, deleteUser]
}