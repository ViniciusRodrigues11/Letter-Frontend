import React from 'react';

import Landing from './Pages/Landing'
import CreateLetter from './Pages/CreateLetter'

import GlobalStyle from './style/global'

import Snowfall from 'react-snowfall'
function App() {
  return (
    <>
      <CreateLetter />
      <GlobalStyle />
      <Snowfall
        snowflakeCount={10}
      />
    </>
  );
}

export default App;
