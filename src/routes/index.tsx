import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import CreateLetter from '../Pages/CreateLetter'
import Landing from '../Pages/Landing/index'
import Letter from '../Pages/Letter/index'


import GlobalStyle from '../style/global'
import Snowfall from 'react-snowfall'

const Routes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/create" component={CreateLetter} />
            <Route path="/letter/:id" component={Letter} />
        </Switch>
        <GlobalStyle />
        <Snowfall
            snowflakeCount={10}
        />
    </BrowserRouter>

)

export default Routes