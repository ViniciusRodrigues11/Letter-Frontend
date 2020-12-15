import React from 'react';
import Routes from './routes'


import GlobalStyle from './style/global'

import Snowfall from 'react-snowfall'
function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
      <Snowfall
        snowflakeCount={10}
      />
    </>
  );
}

export default App;
