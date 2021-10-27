import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core//Box';
import Toolbar from '@material-ui/core//Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Drawer } from '@material-ui/core';
import Logo from '../../../img/logo.png'
import { Link } from "react-router-dom";
import { styled } from '@material-ui/styles';

const MyNavBar = styled(AppBar)({
  background: '#7e57c2',
  height: '3em'
});

const MyLink = styled(Link)({
  color: 'white',
  textDecoration: 'none'
})

export default function ButtonAppBar({auth, setAuth, history}) {
  const [open, setOpen] = React.useState(false)
  const toggleDrawer = (newOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(newOpen);
  };

  const handleExit = () => {
    setAuth(null)
    history.push('/')
  }
  
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <MyNavBar position="static">
          <Toolbar>
            {
              auth === null ?
              <>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <Link to="/">
                    <img src={Logo} sx={{ flexGrow: 1 }} alt="" />
                  </Link>
                </Typography>
                <MyLink to="/login">
                  <Button color="inherit">Login</Button>
                </MyLink>
                <MyLink to="/signin">
                  <Button color="inherit">Cadastro</Button>
                </MyLink>
              </>
              :
              <>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <Link to="/">
                    <img src={Logo} sx={{ flexGrow: 1 }} alt="" />
                  </Link>
                </Typography>
                <Button color="inherit">Olá, {auth.username}!</Button>
                <MyLink to="/dashboard">
                  <Button color="inherit">Anotações</Button>
                </MyLink>
                <Button color="inherit" onClick={handleExit}>Sair</Button>
              </>
            }
          </Toolbar>
        </MyNavBar>
      </Box>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ flexGrow: 1 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
        </Box>
      </Drawer>
    </>
  );
}