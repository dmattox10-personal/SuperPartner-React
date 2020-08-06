import { useState, useEffect } from 'react'

export const useVehicles = () => {

    const [vehicles, updateVehicles] = useState([])

    useEffect(() => {

    }, [])

    const addVehicle = data => {

    }

    const updateVehicle = data => {

    }

    const deleteVehicle = data => {

    }

    return [vehicles, addVehicle, updateVehicle, deleteVehicle]
}