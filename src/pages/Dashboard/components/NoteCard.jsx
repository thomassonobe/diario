import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { moodIcons } from '../../../shared/components/Icons';
import { colortags } from '../../../shared/components/Colortags';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ReadNoteDialog from './ReadNoteDialog';
import EditNoteDialog from './EditNoteDialog';
import DeleteNoteDialog from './DeleteNoteDialog';


const NoteCard = ({note, auth, setAuth}) => {
  const {timestamp, title, desc, mood, colortag} = note
  const [openView, setOpenView] = React.useState(false)
  const [openEdit, setOpenEdit] = React.useState(false)
  const [openDelete, setOpenDelete] = React.useState(false)
  const MoodIcon = moodIcons[mood]

  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardActionArea onClick={() => setOpenView(true)}>
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
        </CardActionArea>
        <CardActions>
          <IconButton sx={{marginLeft: 'auto'}} onClick={() => setOpenEdit(true)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => setOpenDelete(true)}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>

      <br />
      <ReadNoteDialog open={openView} setOpen={setOpenView} note={note} />
      <EditNoteDialog open={openEdit} setOpen={setOpenEdit} note={note}
        auth={auth} setAuth={setAuth}/>
      <DeleteNoteDialog open={openDelete} setOpen={setOpenDelete} note={note}
        auth={auth} setAuth={setAuth}/>
    </>
  );
}

export default NoteCard;