import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import NoteDialog from './NoteDialog';
import { moodIcons } from '../../../shared/components/Icons';
import { colortags } from '../../../shared/components/Colortags';

const NoteCard = ({note, auth, setAuth}) => {
  const {timestamp, title, desc, mood, colortag} = note
  const [openDialog, setOpenDialog] = React.useState({ open: false, edit: false })

  const handleClickOpen = (edit) => {
    setOpenDialog({ open: true, edit: edit })
  };

  const MoodIcon = moodIcons[mood]

  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Box sx={{ flexDirection: 'row', display: 'flex', alignItems: 'baseline' }}>
            <Grid container spacing={2} sx={{ flex: 1 }}>
              <Grid item s={1}>
                <h3><MoodIcon on={true} /></h3>
              </Grid>
              <Grid item s={1}>
                <h3>{title}</h3>
              </Grid>
            </Grid>
            <Grid container spacing={1} wrap='nowrap' sx={{ flex: 0 }}>
              {colortag.map(c =>
                <Grid item>
                  <Box className="quadrado" sx={{backgroundColor: colortags[c]}}></Box>
                </Grid>)}
            </Grid>
          </Box>

          <span>{timestamp.toLocaleString().slice(0, -3)}</span>
          <p style={{textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>
            {desc}
          </p>
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