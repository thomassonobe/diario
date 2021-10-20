import * as React from 'react';
import Header from '../../shared/components/Header'
import Container from '@material-ui/core/Container';
import Gatinho from "../../img/hello.png"
import { Button } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import './index.css'
import Meh from '../../shared/components/Icons/Meh';
import SadTear from '../../shared/components/Icons/SadTear';
import MehBlank from '../../shared/components/Icons/MehBlank';
import SmileBeam from '../../shared/components/Icons/SmileBeam';
import SmileWink from '../../shared/components/Icons/SmileWink';

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});

const Home = () => {
  return (
    <>
      <Header></Header>
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

        <br />
        <h2>Humores</h2>
        <div className="gridIcons">
          <SadTear />
          <Meh />
          <MehBlank />
          <SmileBeam />
          <SmileWink />
        </div>
        <MyButton>Teste 1231</MyButton>
      </Container>
    </>
  );
}

export default Home;
