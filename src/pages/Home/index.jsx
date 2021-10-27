import * as React from 'react';
import Header from '../../shared/components/Header'
import Footer from '../../shared/components/Footer'
import Container from '@material-ui/core/Container';
import Gatinho from "../../img/hello.png"
import './index.css'
import { moodIcons } from '../../shared/components/Icons';
import { colortags } from '../../shared/components/Colortags'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const Home = ({auth, setAuth}) => {
  return (
    <>
      <Header auth={auth} setAuth={setAuth} />
      <Container>
        <br />

        <img src={Gatinho} align="left" alt="" />
        <br />
        <h5>bem-vindo ao</h5>
        <h1>diar.<span>io</span></h1>

        <hr />
        <br />

        <p>Este é seu espaço pessoal de registro de memórias. Aqui, você pode registrar seu dia-a-dia e suas emoções, sem deixar de mão a aquarela da vida, cheias de cores e vibrações para representar o que sua vida tem de único.</p>
        <p>O diar.io foi criado como um sistema de diário, em que nele cada usuário pode inserir registros diários, que contam com a inserção de cores, para representar por exemplo um tipo de evento que ocorreu no dia, além do humor ao escrever aquela anotação.</p>

        <br />
        <h2>Cores</h2>
        <Box>
          <Grid container spacing={1}>
            {
              colortags.map(c =>
                <Grid item s={1}>
                  <div style={{backgroundColor: c}} className="quadrado"></div>
                </Grid>)
            }
          </Grid>
        </Box>

        <br />
        <h2>Humores</h2>
        <div className="gridIcons">
          {moodIcons.map((Icon, i) => <Icon on={true} key={i} />)}
        </div>
      </Container>

      <Footer/>
    </>
  );
}

export default Home;
