import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { moodIcons } from '../../../shared/components/Icons';
import { colortags } from '../../../shared/components/Colortags';

const ReadNoteDialog = ({ open, setOpen, note }) => {
  const {timestamp, title, desc, mood, colortag} = note
  const MoodIcon = moodIcons[mood]

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      style={{ padding: '1em' }}
    >
      <DialogTitle>
        <h3><MoodIcon on={true} />&nbsp;&nbsp;{title}</h3>
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ whiteSpace: 'pre-wrap' }}>
          {desc}
        </DialogContentText>
      </DialogContent>
    </Dialog >
  );
}

export default ReadNoteDialog