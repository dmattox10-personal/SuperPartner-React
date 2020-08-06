import { useState, useEffect } from 'react'

export const useLocations = () => {

    const [locations, updateLocations] = useState([])

    useEffect(() => {

    }, [])

    const addLocation = data => {

    }

    const updateLocation = data => {

    }

    const deleteLocation = data => {

    }

    return [locations, addLocation, updateLocation, deleteLocation]
}