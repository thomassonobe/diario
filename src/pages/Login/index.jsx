import * as React from 'react';
import Header from '../../shared/components/Header'
import Footer from '../../shared/components/Footer'
import Gatinho from "../../img/hello.png"
import Container from '@mui/material/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './index.css';
import { validatePassword } from '../../shared/utils';
import { Auth } from '../../services/auth';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import CircularProgress from '@mui/material/CircularProgress';


const Login = ({auth, setAuth, history}) => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [failure, setFailure] = React.useState(false)

  const handleClick = () => {
    setLoading(true)
    Auth.login(username, password)
      .then(token => {
        setLoading(false)
        setAuth({username, token})
        history.push('/dashboard')
      })
      .catch(err => {
        setFailure(true)
        setLoading(false)
      })
  }

  const handleClose = (_, reason) => {
    if (reason === 'clickaway')
      return
    setFailure(false)
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
                  <h2>Faça seu Login!</h2>
                  <TextField
                    fullWidth
                    id="fullWidth"
                    label="Nome de usuário"
                    variant="standard"
                    onChange={e => setUsername(e.target.value)}
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
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    error={validatePassword(password)}
                    helperText="Sua senha deve conter pelo menos 8 caracteres entre números, maiúsculos e minúsculos"
                  />

                  <br />
                  <br />

                  <Button
                    variant="outlined"
                    onClick={handleClick}
                    disabled={!password || !username}
                  >Login</Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3}></Grid>
          </Grid>
        </Box>
      </Container>

      <Snackbar open={failure} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Falha no login. Seu nome de usuário e senha estão incorretos.
        </Alert>
      </Snackbar>

      <Footer />
    </>
  );
}

export default Login;
