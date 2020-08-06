import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { spContext } from '../contexts/spContext'
import { useLocations } from '../hooks/useLocations'
import { useMachines } from '../hooks/useMachines'
import { useService } from '../hooks/useService'
import { useVehicles } from '../hooks/useVehicles'

import PrivateRoute from './PrivateRoute'
import Landing from './Landing'
import Locations from './Locations'
import Machines from './Machines'
import Service from './Service'
import Vehicles from './Vehicles'
import Reporting from './Reporting'
import Login from './Login'
import FirstRun from './FirstRun'

const Container = props => {

    return (
        <div>
            <Switch>
                <spContext.Provider value={{smurfs, addSmurf, updateSmurf, deleteSmurf}}>
                    <PrivateRoute path='/landing' component={ Landing } />
                    <PrivateRoute path='/locations' component={ Locations } />
                    <Route path='/login' component={ Login } />
                    <Route path='/firstrun' component={ FirstRun } />
                    <Route component={ Login } />
                </spContext.Provider>
            </Switch>
        </div>
    )
}

export default Container