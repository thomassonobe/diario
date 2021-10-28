import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Notes } from '../../../services/notes';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

const DeleteNoteDialog = ({ open, setOpen, note, auth, setAuth }) => {
  const [loading, setLoading] = React.useState(false)
  const [failure, setFailure] = React.useState(false)

  const handleClose = () => setOpen(false)
  const handleDelete = () => {
    setLoading(true)
    Notes.delete(auth, note)
      .then(() => {
        setLoading(false)
        handleClose()
        setAuth({...auth})
      })
      .catch(() => {
        setFailure(true)
        setLoading(false)
        setTimeout(handleClose, 1100)
      })
  }

  const handleCloseSnack = (reason) => {
    if (reason === 'clickaway')
      return
      setFailure(false)
  }

  return (
    <>
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Apagar a anotação?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Ao confirmar, essa anotação será irreversivelmente apagada do seu diário.
          {
            loading ?
            <Box sx={{ width: '100%' }}>
              <LinearProgress />
            </Box>
            :
            null
          }
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleDelete} autoFocus>
          Apagar
        </Button>
      </DialogActions>
    </Dialog>

    <Snackbar open={failure} autoHideDuration={1000} onClose={(_, r) => handleCloseSnack(r)}>
      <Alert onClose={(_, r) => handleCloseSnack(r)} severity="error" sx={{ width: '100%' }}>
        Ocorreu um erro ao apagar a anotação.
      </Alert>
    </Snackbar>

    </>
  );
}

export default DeleteNoteDialog