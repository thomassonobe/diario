import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core//Box';
import Toolbar from '@material-ui/core//Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

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
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
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
          <List>
            <ListItem button key={'login'}>
              <ListItemIcon><AccessAlarmIcon /></ListItemIcon>
              <ListItemText>Login</ListItemText>
            </ListItem>
            <ListItem button key={'Cadastro'} >
              <ListItemText>Cadastro</ListItemText>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}