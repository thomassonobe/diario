import * as React from 'react'
import Routes from './routes'
import AdapterMoment from '@mui/lab/AdapterMoment'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import moment from 'moment';
import 'moment/locale/pt-br';

moment.locale('pt-br');
console.log(moment.localeData())

const App = () => (
  <LocalizationProvider dateAdapter={AdapterMoment}>
    <Routes />
  </LocalizationProvider>
);

export default App;
