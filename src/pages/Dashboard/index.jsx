import * as React from 'react';
import Header from '../../shared/components/Header'
import Container from '@material-ui/core/Container';
import Card from './components/Card'
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


  return (
    <>
      <Header></Header>
      <Container>
        <h1>Cadastro</h1>
        {dataDailys.map((daily, index) => {
          return (
            <Card key={index} daily={daily} />)
        })}
      </Container>
    </>
  );
}

export default Dashboard;