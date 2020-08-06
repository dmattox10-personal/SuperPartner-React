import { useState, useEffect } from 'react'

export const useService = () => {

    const [services, updateServices] = useState([])

    useEffect(() => {

    }, [])

    const addService = data => {

    }

    const updateService = data => {

    }

    const deleteService = data => {

    }

    return [services, addService, updateService, deleteService]
}