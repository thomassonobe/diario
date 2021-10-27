import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import NoteDialog from './NoteDialog';
import { selectIcon } from '../../../shared/utils';

const NoteCard = ({note, auth, setAuth}) => {
  const {timestamp, title, desc, mood, colortag} = note
  const [openDialog, setOpenDialog] = React.useState({ open: false, edit: false })

  const handleClickOpen = (edit) => {
    setOpenDialog({ open: true, edit: edit })
  };

  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item s={1}>
                <h3>{selectIcon(mood)}</h3>
              </Grid>
              <Grid item s={1}>
                <h3>{title}</h3>
              </Grid>
            </Grid>
          </Box>

          <span>{timestamp.toLocaleString().slice(0, -3)}</span>
          <p>{desc}</p>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => handleClickOpen(false)}>Ver</Button>
          <Button size="small" onClick={() => handleClickOpen(true)}>Editar</Button>
        </CardActions>
      </Card>

      <br />
      <NoteDialog openDialog={openDialog} setOpenDialog={setOpenDialog} note={note}
        auth={auth} setAuth={setAuth}/>
    </>
  );
}

export default NoteCard;