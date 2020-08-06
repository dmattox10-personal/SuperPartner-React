import { useState, useEffect } from 'react'

export const useMachines = () => {

    const [machines, updateMachines] = useState([])

    useEffect(() => {

    }, [])

    const addMachine = data => {

    }

    const updateMachine = data => {

    }

    const deleteMachine = data => {

    }

    return [machines, addMachine, updateMachine, deleteMachine]
}