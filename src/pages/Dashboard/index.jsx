import * as React from 'react';
import Header from '../../shared/components/Header'
import Container from '@material-ui/core/Container';
import Card from './components/Card'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import TabPanel from "@material-ui/lab/TabPanel";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Gatinho from "../../img/hello.png"
import './index.css'
import Footer from '../../shared/components/Footer'

// Exemplo das TabPanel
// <TabPanel value="1">Item One</TabPanel>
// <TabPanel value="2">Item Two</TabPanel>
// <TabPanel value="3">Item Three</TabPanel>

const dataDailys = [
  {
    title: "Titulo do Diário",
    date: new Date(),
    dailyNote: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
    humor: 0
  },
  {
    title: "Titulo do Diário",
    date: new Date(),
    dailyNote: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
    humor: 0
  },
  {
    title: "Titulo do Diário",
    date: new Date(),
    dailyNote: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
    humor: 0
  },
  {
    title: "Titulo do Diário",
    date: new Date(),
    dailyNote: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
    humor: 0
  },
  {
    title: "Titulo do Diário",
    date: new Date(),
    dailyNote: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
    humor: 0
  }
]

const Dashboard = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          <Tabs value={value} onChange={handleChange} centered>
            <Tab value="1" label="Todos" />
            <Tab value="2" label="Dias" />
            <Tab value="3" label="Humor" />
          </Tabs>
        </Box>
      </Container>

      <Container>
        {dataDailys.map((daily, index) => {
          return (
            <Card key={index} daily={daily} />)
        })}
      </Container>

      <Footer></Footer>
    </>
  );
}

export default Dashboard;