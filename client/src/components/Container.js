import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import { spContext } from '../contexts/spContext'

import { useLocations } from '../hooks/useLocations'
import { useMachines } from '../hooks/useMachines'
import { useService } from '../hooks/useService'
import { useVehicles } from '../hooks/useVehicles'
import { useUsers } from '../hooks/useUsers'
import { useSecurity } from '../hooks/useSecurity'

import PrivateRoute from './PrivateRoute'
import Landing from './Landing'
import Locations from './Locations'
import Machines from './Machines'
import Service from './Service'
import Vehicles from './Vehicles'
import Reporting from './Reporting'
import Login from './Login'
import Setup from './Setup'

const Container = props => {

    const [users, addUser, updateUser, deleteUser] = useUsers()
    const [vehicles, addVehicle, updateVehicle, deleteVehicle] = useVehicles()
    const [machines, addMachine, updateMachine, deleteMachine] = useMachines()
    const [services, addService, updateService, deleteService] = useService()
    const [locations, addLocation, updateLocation, deleteLocation] = useLocations()
    const [activeUser, loginActiveUser, logoutActiveUser, updateActiveUser, registerUser] = useSecurity() // try null in useSecurity, then try here if that's a problem

    let history = useHistory()
    if (users === null && activeUser === null) {
        history.push('/setup')
    }
    else if (users !== null && activeUser === null) {
        history.push('/login')
    }

    return (
        <div>
            <Switch>
                <spContext.Provider value={{ users, addUser, updateUser, deleteUser, vehicles, addVehicle, updateVehicle, deleteVehicle, machines, addMachine, updateMachine, deleteMachine, services, addService, updateService, deleteService, locations, addLocation, updateLocation, deleteLocation, activeUser, loginActiveUser, logoutActiveUser, updateActiveUser, registerUser }}>
                    <PrivateRoute path='/landing' component={Landing} />
                    <PrivateRoute path='/locations' component={Locations} />
                    <PrivateRoute path='/machines' component={Machines} />
                    <PrivateRoute path='/service' component={Service} />
                    <PrivateRoute path='/vehicles' component={Vehicles} />
                    <PrivateRoute path='/reporting' component={Reporting} />
                    <Route path='/login' component={Login} />
                    <Route path='/setup' component={Setup} />
                </spContext.Provider>
            </Switch>
        </div>
    )
}

export default Container