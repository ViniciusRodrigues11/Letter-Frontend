import React from 'react'
import { Switch, Route } from 'react-router-dom'

import CreateLetter from '../Pages/CreateLetter'
import Landing from '../Pages/Landing/index'
import Letter from '../Pages/Letter/index'

const Routes: React.FC = () => (
   
        <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/create" component={CreateLetter} />
            <Route path="/letter/:id" component={Letter} />
        </Switch>

)

export default Routes