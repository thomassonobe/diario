import * as React from 'react';
import Header from '../../shared/components/Header'
import Footer from '../../shared/components/Footer'
import Gatinho from "../../img/hello.png" 
import Container from '@material-ui/core/Container';
import './index.css'

const Login = () => {
  return (
    <>
      <Header/>

      <Container>
        <div class='center'>
          <img src={Gatinho} align='left' alt="" />
          <br />
          <h1 align='center'>diar.<span>io</span></h1>
        </div>
      </Container>

      <Footer/>
    </>
  );
}

export default Login;
