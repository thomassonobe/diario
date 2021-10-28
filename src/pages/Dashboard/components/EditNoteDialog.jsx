import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { moodIcons, moodLabels } from '../../../shared/components/Icons';
import { MenuItem, Select } from '@material-ui/core';
import { Notes } from '../../../services/notes'


const EditNoteDialog = ({ open, setOpen, note, auth, setAuth }) => {
  const handleClose = () => setOpen(false)
  const [noteEdit, setNoteEdit] = React.useState(note)

  const handleSave = () => {
    if (noteEdit.id === null || noteEdit.id === undefined)
      Notes.post(auth, noteEdit)
        .then(() => {
          alert('Anotação criada com sucesso')
          handleClose()
          setAuth({...auth})
        })
        .catch(() => {
          alert('Falha ao salvar a anotação.')
        })
    else
      Notes.put(auth, noteEdit)
        .then(() => {
          alert('Anotação salva com sucesso.')
          handleClose()
          setAuth({...auth})
        })
        .catch(() => {
          alert('Falha ao salvar a anotação.')
        })
  }  

  return (
    <Dialog open={open} onClose={handleClose} style={{ padding: '1em' }}>
      <DialogContent>
        <DialogContentText>
          <TextField
            fullWidth
            label="Titulo"
            variant="standard"
            value={noteEdit.title}
            onChange={(e) => setNoteEdit({ ...noteEdit, title: e.target.value })}
          />
          <TextField
            fullWidth
            label="Anotação"
            variant="standard"
            value={noteEdit.desc}
            multiline
            rows={4}
            onChange={(e) => setNoteEdit({ ...noteEdit, desc: e.target.value })}
          />
          <Select
            value={noteEdit.mood}
            onChange={(e) => setNoteEdit({ ...noteEdit, mood: e.target.value })}
          >
            {
              moodIcons.map((Icon, i) =>
                <MenuItem value={i}><Icon key={i} on={true} />{moodLabels[i]}</MenuItem>)
            }
          </Select>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleSave}>Salvar</Button>
      </DialogActions>
    </Dialog >
  );
}

export default EditNoteDialog