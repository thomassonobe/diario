import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core//Box';
import Toolbar from '@material-ui/core//Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Drawer } from '@material-ui/core';
import Logo from '../../../img/logo.png'
import {
  Link
} from "react-router-dom";
export default function ButtonAppBar() {
  const [open, setOpen] = React.useState(false)
  const toggleDrawer = (newOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(newOpen);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">
                <img src={Logo} sx={{ flexGrow: 1 }} alt="" />
              </Link>
            </Typography>
            <Link to="/login">
              <Button color="inherit">Login</Button>
            </Link>
            <Link to="/cadastro">
              <Button color="inherit">Cadastro</Button>
            </Link>
          </Toolbar>
        </AppBar>
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