import * as React from 'react';
import Header from '../../shared/components/Header'
import Container from '@material-ui/core/Container';
import Card from './components/Card'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Gatinho from "../../img/hello.png"
import './index.css'
import Footer from '../../shared/components/Footer'
import { Typography } from '@material-ui/core';
import { useState } from 'react';

const data = [
  {
    title: "dTitulo do Diário",
    date: '25 10 2021',
    dailyNote: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
    humor: 0
  },
  {
    title: "aTitulo do Diário",
    date: '24 10 2021',
    dailyNote: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
    humor: 1
  },
  {
    title: "Titulo do Diário",
    date: '19 10 2021',
    dailyNote: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
    humor: 2
  },
  {
    title: "zTitulo do Diário",
    date: '31 10 2021',
    dailyNote: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
    humor: 3
  },
  {
    title: "cTitulo do Diário",
    date: '22 10 2021',
    dailyNote: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
    humor: 4
  },
  {
    title: "bTitulo do Diário",
    date: '30 10 2021',
    dailyNote: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
    humor: 0
  },
]
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const Dashboard = () => {
  const [value, setValue] = React.useState(0);
  const [dataDailys] = React.useState(data);
  const [filteredDailys, setFilteredDailys] = React.useState(data);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      setFilteredDailys(dataDailys.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)))
    } else if (newValue === 1) {
      setFilteredDailys(dataDailys.sort((a, b) => (a.humor < b.humor) ? 1 : ((b.humor < a.humor) ? -1 : 0)))
    } else if (newValue === 2) {
      setFilteredDailys(dataDailys.sort((a, b) => new Date(b.date) - new Date(a.date)))
    }
  };

  React.useEffect(() => {
    handleChange()
  }, [filteredDailys])

  return (
    <>
      <Header></Header>
      <Container>
        <div class="center">
          <img src={Gatinho} align="left" alt="" />
          <br />
          <h5>bem-vindo usuario!</h5>
        </div>
        <Box sx={{ width: '100%' }}>
          <Tabs value={value} onChange={(e, value) => handleChange(e, value)} centered>
            <Tab value={0} label="Todos" />
            <Tab value={1} label="Humor" />
            <Tab value={2} label="Data" />
          </Tabs>
        </Box>
      </Container>
      <Container>
        {filteredDailys.map((daily, index) => {
          return (
            <Card key={index} daily={daily} />)
        })}
      </Container>
      <Footer></Footer>
    </>
  );
}

export default Dashboard;