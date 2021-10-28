import * as React from 'react';
import Header from '../../shared/components/Header'
import Footer from '../../shared/components/Footer'
import Gatinho from "../../img/hello.png"
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { validatePassword } from '../../shared/utils';
import './index.css'
import { Auth } from '../../services/auth';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import CircularProgress from '@mui/material/CircularProgress';


const Signin = ({auth, setAuth, history}) => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const [failure, setFailure] = React.useState(false)
  const [errmsg, setErrmsg] = React.useState('')

  const handleClick = () => {
    setLoading(true)
    Auth.signup(username, password)
      .then(() => {
        setSuccess(true)
        setLoading(false)
        setTimeout(() => history.push('/login'), 1100)
      })
      .catch(err => {
        setErrmsg(err.response.data.message)
        setFailure(true)
        setLoading(false)
      })
  }

  const handleClose = (set, reason) => {
    if (reason === 'clickaway')
      return
    set(false)
  }

  return (
    <>
      <Header history={history} auth={auth} setAuth={setAuth} />

      <Container>
        <div class='center'>
          {
            loading ?
            <CircularProgress />
            :
            <>
            <img src={Gatinho} align='left' alt="" />
            <br />
            <h1 align='center'>diar.<span>io</span></h1>
            </>
          }
        </div>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={3}></Grid>

            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <h2>Faça seu Cadastro!</h2>
                  <TextField
                    fullWidth
                    id="fullWidth"
                    label="Nome de usuário"
                    variant="standard"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}

                  />

                  <br />
                  <br />

                  <TextField
                    fullWidth
                    id="fullWidth"
                    label="Senha"
                    variant="standard"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    error={validatePassword(password)}
                    helperText="Sua senha deve conter pelo menos 8 caracteres entre números, maiúsculos e minúsculos"
                  />

                  <br />
                  <br />

                  <Button
                    variant="outlined"
                    onClick={handleClick}
                    disabled={!username || !password}
                  >Cadastro</Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3}></Grid>
          </Grid>
        </Box>
      </Container>

      <Snackbar open={success} autoHideDuration={1000} onClose={(_, r) => handleClose(setSuccess, r)}>
        <Alert onClose={(_, r) => handleClose(setSuccess, r)} severity="success" sx={{ width: '100%' }}>
          Cadastro realizado com sucesso!
        </Alert>
      </Snackbar>

      <Snackbar open={failure} autoHideDuration={6000} onClose={(_, r) => handleClose(setFailure, r)}>
        <Alert onClose={(_, r) => handleClose(setFailure, r)} severity="error" sx={{ width: '100%' }}>
          Ocorreu um erro no cadastro: {errmsg}
        </Alert>
      </Snackbar>

      <Footer />
    </>
  );
}

export default Signin;
