import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { MoodIcon } from '../../../shared/components/Moods';
import { ColortagsGrid } from '../../../shared/components/Colortags';
import { styled } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const NoteDialog = styled(Dialog)({
  padding: '1em',
});

const ReadNoteDialog = ({ open, setOpen, note }) => {
  const {timestamp, title, desc, mood, colortag} = note

  return (
    <NoteDialog
      open={open}
      onClose={() => setOpen(false)}
      fullWidth={true}
      maxWidth="md"
    >
      <DialogTitle>
        <Box sx={{ flexDirection: 'row', display: 'flex', alignItems: 'baseline' }}>
          <Grid container spacing={2} sx={{ flex: 1 }}>
            <Grid item s={1}>
              <h3><MoodIcon on={true} mood={mood}/></h3>
            </Grid>
            <Grid item s={1}>
              <h3>{title}</h3>
            </Grid>
          </Grid>
          <ColortagsGrid tags={colortag} />
        </Box>
        <span>{timestamp.toLocaleString().slice(0, -3)}</span>
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ whiteSpace: 'pre-wrap' }}>
          {desc}
        </DialogContentText>
      </DialogContent>
    </NoteDialog >
  );
}

export default ReadNoteDialog