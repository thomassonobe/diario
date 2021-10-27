import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import { moodIcons, moodLabels } from '../../../shared/components/Icons';
import { MenuItem, Select } from '@material-ui/core';
import { Notes } from '../../../services/notes'

/*

Isso aqui realmente não tá sendo usado, né?

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

const customIcons = [
  {
    icon: <SadTear />,
    label: 'Very Dissatisfied',
  },
  {
    icon: <Meh />,
    label: 'Dissatisfied',
  },
  {
    icon: <MehBlank />,
    label: 'Neutral',
  },
  {
    icon: <SmileBeam />,
    label: 'Satisfied',
  },
  {
    icon: <SmileWink />,
    label: 'Very Satisfied',
  },
];

 */

const NoteDialog = ({ openDialog, setOpenDialog, note, auth, setAuth }) => {
  const handleClose = () => {
    setOpenDialog({ ...openDialog, open: false });
  };
  const [noteEdit, setNoteEdit] = React.useState(note)

  const handleDelete = () => {
    Notes.delete(auth, note)
      .then(() => {
        alert('Anotação apagada com sucesso.')
        handleClose()
        setAuth({...auth})
      })
      .catch(() => {
        alert('Falha ao apagar a anotação.')
      })
  }

  const handleSave = () => {
    console.log(auth)
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
    <Dialog open={openDialog.open} onClose={handleClose} style={{ padding: '1em' }}>
      {openDialog.edit ? (
        <>
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
        </>
      ) : (
        <>
          <DialogTitle>{noteEdit.title}{moodIcons[noteEdit.mood]}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {noteEdit.desc}
              <br />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Fechar</Button>
            <Button onClick={handleDelete}>Apagar</Button>
          </DialogActions>
        </>
      )}

    </Dialog >
  );
}

export default NoteDialog