import * as React from 'react';
import Header from '../../shared/components/Header'
import Footer from '../../shared/components/Footer'
import Gatinho from "../../img/hello.png"
import Container from '@material-ui/core/Container';
import Card from'@material-ui/core/Card';
import CardContent from'@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './index.css'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Cadastro = () => {
  return (
    <>
      <Header/>

      <Container>
        <div class='center'>
            <img src={Gatinho} align='left' alt="" />
            <br />
            <h1 align='center'>diar.<span>io</span></h1>
        </div>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={3}></Grid>

            <Grid item xs={6}>
              <Card>
                <CardContent>
                <h2>Faça seu Cadastro!</h2>
                <TextField fullWidth id="fullWidth" label="Username" variant="standard"/>

                <br />
                <br />

                <TextField fullWidth id="fullWidth" label="Senha" variant="standard" />

                <br />
                <br />

                <Button variant="outlined">Cadastro</Button>
              </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3}></Grid>
          </Grid>
      </Box>
      </Container>

      <Footer/>
    </>
  );
}

export default Cadastro;
