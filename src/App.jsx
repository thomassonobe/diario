import * as React from 'react'
import Routes from './routes'
import AdapterMoment from '@mui/lab/AdapterMoment'
import LocalizationProvider from '@mui/lab/LocalizationProvider'


const App = () => (
  <LocalizationProvider dateAdapter={AdapterMoment}>
    <Routes />
  </LocalizationProvider>
);

export default App;
