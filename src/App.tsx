import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes'


import GlobalStyle from './style/global'

import Snowfall from 'react-snowfall'
function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyle />
      <Snowfall
        snowflakeCount={10}
      />
    </BrowserRouter>
  );
}

export default App;
