import * as React from 'react';
import './index.css'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@material-ui/styles';
import Header from '../../shared/components/Header'
import Container from '@material-ui/core/Container';
import NoteCard from './components/NoteCard'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import './index.css';
import { Notes } from '../../services/notes';
import { moodIcons } from '../../shared/components/Icons';
import { colortags } from '../../shared/components/Colortags';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';

 
const tagEncode = ts => ts.reduce((acc, t) => acc + (1 << t), 0)

const MyFab = styled(Fab)({
  position: 'fixed',
  bottom: '1em',
  left: '1em',
  zIndex: 100
});

const sorters = [
  (a, b) => b.timestamp - a.timestamp,
  (a, b) => a.title > b.title ? 1 : b.title > a.title ? -1 : 0,
  (a, b) => b.mood - a.mood
]

const Dashboard = ({auth, setAuth, history}) => {
  const [tab, setTab] = React.useState(0);
  const [notes, setNotes] = React.useState(null);
  const [filteredNotes, setFilteredNotes] = React.useState([]);
  const [query, setQuery] = React.useState('');
  const [moodFilter, setMoodFilter] = React.useState(null);
  const [tagFilter, setTagFilter] = React.useState([]);
  const [dateFilter, setDateFilter] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [failure, setFailure] = React.useState(false);

  React.useEffect(() => {
    if (loading && notes === null)
      return
    setLoading(true)
    setTimeout(() => {
      const tags = tagEncode(tagFilter)
      const q = query.toLowerCase()
      const filtered = notes
        .filter(note => dateFilter === null || dateFilter.isSame(note.timestamp, 'day'))
        .filter(note => moodFilter === null || note.mood === moodFilter)
        .filter(note => tags === 0 || (tags & tagEncode(note.colortag)))
        .filter(note => q === '' || note.title.toLowerCase().match(q) || note.desc.toLowerCase().match(q))
        .sort(sorters[tab === undefined || tab === null ? 0 : tab])
      setFilteredNotes(filtered)
      setLoading(false)
    }, 100)
  }, [notes, tab, query, dateFilter, moodFilter, tagFilter])

  React.useEffect(() => {
    setLoading(true)
    if (auth) {
      Notes.get(auth)
        .then(newNotes => {
          setNotes(newNotes)
        })
        .catch(() => {
          setFailure(true)
          setNotes([])
        })
    } else
      setNotes([])
  }, [auth])

  const handleClose = (_, reason) => {
    if (reason === 'clickaway')
      return
    setFailure(false)
  }

  return (
    <>
      <Header history={history} auth={auth} setAuth={setAuth} />
      <Container className="before-content" sx={{height: '3em'}}>
        <Box sx={{ width: '100%' }}>
          <Tabs value={tab} onChange={(_, v) => setTab(v)} centered>
            <Tab value={0} label="Recentes" />
            <Tab value={1} label="Título" />
            <Tab value={2} label="Humor" />
          </Tabs>
        </Box>
      </Container>
      <Container id="notelist-container">
        {
          loading ?
          <Box id="notelist" className="no-notes">
            <CircularProgress />
          </Box>
          :
          filteredNotes.length === 0 ?
          <Box id="notelist" className="no-notes" >
            <h2>Nenhuma anotação encontrada :T</h2>
          </Box>
          :
          <Box id="notelist">
            {filteredNotes.map((note, index) =>
                <NoteCard key={index} note={note} auth={auth} setAuth={setAuth} />)}
          </Box>
        }
        <Box sx={{flexGrow: 1}}>
          <Container>
            
            <OutlinedInput
              sx={{width: '100%'}}
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Buscar..."
              inputProps={{style: {marginLeft: '4px'}}}
              startAdornment={<SearchIcon />}
            />
            <br/>
            <br/>

            <h4>Data</h4>
            <Stack direction="row" spacing={2} alignItems="center">
              <DatePicker
                value={dateFilter}
                inputFormat="DD/MM/yyyy"
                onChange={(v) => setDateFilter(v)}
                renderInput={(params) => <TextField {...params} />}
              />
              <IconButton onClick={() => setDateFilter(null)} aria-label="clear">
                <ClearIcon />
              </IconButton>
            </Stack>
            <br/>

            <h4>Humor</h4>
            <ToggleButtonGroup
              value={moodFilter}
              exclusive
              onChange={(_, v) => setMoodFilter(v)}
            >
              {
                moodIcons.map((Icon, i) =>
                  <ToggleButton key={i} value={i}><Icon on={moodFilter === i} /></ToggleButton>)
              }
            </ToggleButtonGroup>
            <br/>
            <br/>

            <h4>Cor</h4>
            <ToggleButtonGroup value={tagFilter} onChange={(_, v) => setTagFilter(v)}>
              {
                colortags.map((c, i) =>
                  <ToggleButton key={i} value={i}>
                    <div className="quadrado" style={{ backgroundColor: c }}></div>
                  </ToggleButton>)
              }
            </ToggleButtonGroup>
          </Container>
        </Box>
      </Container>

      <Snackbar open={failure} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Ocorreu um erro ao carregar as anotações.
        </Alert>
      </Snackbar>
      
      <MyFab color="primary" aria-label="add">
        <AddIcon />
      </MyFab>
    </>
  );
}

export default Dashboard;