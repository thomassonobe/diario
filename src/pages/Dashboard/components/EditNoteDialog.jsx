import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { MoodSelector } from '../../../shared/components/Moods';
import { ColortagsSelector } from '../../../shared/components/Colortags';
import { Notes } from '../../../services/notes'
import Stack from '@mui/material/Stack';
import DatePicker from '@mui/lab/DatePicker';
import TimePicker from '@mui/lab/TimePicker';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';


const failMessages = {
  post: "Ocorreu um erro ao criar a anotação.",
  put: "Ocorreu um erro ao editar a anotação."
}

const EditNoteDialog = ({ open, setOpen, note, auth, setAuth }) => {
  const id = note?.id
  const mood_ = note?.mood
  const [timestamp, setTimestamp] = React.useState(note?.timestamp || new Date())
  const [title, setTitle] = React.useState(note?.title || '')
  const [desc, setDesc] = React.useState(note?.desc || '')
  const [mood, setMood] = React.useState(mood_ >= 0 && mood_ < 5 ? mood_ : null)
  const [colortag, setColortag] = React.useState(note?.colortag || [])
  const [loading, setLoading] = React.useState(false)
  const [failure, setFailure] = React.useState(false)
  const [failMsg, setFailMsg] = React.useState('')

  const handleClose = () => {
    setOpen(false)
    setFailure(false)
    setTimeout(() => {
      setTimestamp(note?.timestamp)
      setTitle(note?.title)
      setDesc(note?.desc)
      setMood(note?.mood)
      setColortag(note?.colortag)
    }, 100)
  }

  const handleSave = () => {
    if (mood === null) {
      setFailure(true)
      setFailMsg('Algum humor precisa ser selecionado.')
      return
    }
    setLoading(true)
    const newNote = {id, title, desc, mood, colortag, timestamp: timestamp || new Date()}
    const method = (id === null || id === undefined) ? 'post' : 'put'
    console.log(newNote)
    Notes[method](auth, newNote)
      .then(() => {
        setLoading(false)
        handleClose()
        setAuth({...auth})
      })
      .catch(() => {
        setFailure(true)
        setLoading(false)
        setFailMsg(failMessages[method])
      })
  }  

  const handleTimesamp = (v) => {
    if (v === null || v === undefined || !v.isValid())
      return
    setTimestamp(v._d)
  }

  const handleCloseSnack = (_, reason) => {
    if (reason === 'clickaway')
      return
      setFailure(false)
  }

  return (
    <>
    <Dialog
      open={open}
      onClose={handleClose}
      style={{ padding: '1em' }}
      fullWidth={true}
      maxWidth="md"
    >
      <DialogContent>
        <DialogContentText>
          <Stack direction="row" spacing={6}>
            <Stack>
              <h4>Humor</h4>
              <MoodSelector mood={mood} setMood={setMood} />
            </Stack>
            <Stack>
              <h4>Cores</h4>
              <ColortagsSelector tags={colortag} setTags={setColortag} />
            </Stack>
          </Stack>
          <br/>
          <Stack direction="row" spacing={6}>
            <DatePicker
              value={timestamp}
              onChange={handleTimesamp}
              renderInput={(params) => <TextField {...params} />}
            />
            <TimePicker
              value={timestamp}
              onChange={handleTimesamp}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
          
          <br/>
          <TextField
            fullWidth
            label="Titulo"
            variant="standard"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <br/>
          <br/>
          <TextField
            fullWidth
            label="Anotação"
            variant="standard"
            value={desc}
            multiline
            rows={4}
            onChange={e => setDesc(e.target.value)}
          />
          {
            loading ?
            <Box sx={{ width: '100%', marginTop: '1em' }}>
              <LinearProgress />
            </Box>
            :
            null
          }
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleSave}>Salvar</Button>
      </DialogActions>
    </Dialog >

    <Snackbar open={failure} autoHideDuration={5000} onClose={handleCloseSnack}>
      <Alert onClose={handleCloseSnack} severity="error" sx={{ width: '100%' }}>
        {failMsg}
      </Alert>
    </Snackbar>

    </>
  );
}

export default EditNoteDialog