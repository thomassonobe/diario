import * as React from 'react';
import Header from '../../shared/components/Header'
import Container from '@material-ui/core/Container';
import NoteCard from './components/Card'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import './index.css'
import Footer from '../../shared/components/Footer'
import { Notes } from '../../services/notes';
import { moodIcons } from '../../shared/components/Icons';
import { colortags } from '../../shared/components/Colortags';
 
const tagEncode = ts => ts.reduce((acc, t) => acc + (1 << t), 0)
const tagCheck = (a, b) => tagEncode(a) & tagEncode(b)

const Dashboard = ({auth, setAuth}) => {
  const [tab, setTab] = React.useState(0);
  const [notes, setNotes] = React.useState([]);
  const [filteredNotes, setFilteredNotes] = React.useState([]);
  const [moodFilter, setMoodFilter] = React.useState(null);
  const [tagFilter, setTagFilter] = React.useState([]);

  React.useEffect(() => {
    const filtered = notes
      .filter(note => moodFilter === null || note.mood === moodFilter)
      .filter(note => tagFilter.length === 0 || tagCheck(note.colortag, tagFilter))
    if (tab === 0) {
      setFilteredNotes(filtered.sort((a, b) => b.timestamp - a.timestamp))
    } else if (tab === 1) {
      setFilteredNotes(filtered.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)))
    } else if (tab === 2) {
      setFilteredNotes(filtered.sort((a, b) => b.mood - a.mood))
    }
  }, [notes, moodFilter, tagFilter, tab])

  React.useEffect(() => {
    if (auth) {
      Notes.get(auth)
        .then(newNotes => {
          setNotes(newNotes)
        })
        .catch(e => alert(e))
    } else {
      setNotes([])
    }
  }, [auth])

  React.useEffect(() => {console.log(tagFilter)}, [tagFilter])

  return (
    <>
      <Header auth={auth} setAuth={setAuth} />
      <Container>
        <Box sx={{ width: '100%' }}>
          <Tabs value={tab} onChange={(_, value) => setTab(value)} centered>
            <Tab value={0} label="Recentes" />
            <Tab value={1} label="Título" />
            <Tab value={2} label="Humor" />
          </Tabs>
        </Box>
      </Container>
      <Container sx={{display: 'flex', flexDirection: 'row'}}>
        <Box sx={{flexGrow: 2}}>
          {filteredNotes.map((note, index) =>
              <NoteCard key={index} note={note} auth={auth} setAuth={setAuth} />)}
        </Box>
        <Box sx={{flexGrow: 1}}>
          <Container>
            <h3>Filtrar por:</h3>
            <h4>Humor</h4>
            <ToggleButtonGroup
              value={moodFilter}
              exclusive
              onChange={(_, v) => setMoodFilter(v)}
            >
              {
                moodIcons.map((Icon, i) =>
                  <ToggleButton key={i} value={i}><Icon on={moodFilter === i}/></ToggleButton>)
              }
            </ToggleButtonGroup>
            <br />
            <br />
            <h4>Cor</h4>
            <ToggleButtonGroup
              value={tagFilter}
              onChange={(_, v) => setTagFilter(v)}
            >
              {
                colortags.map((c, i) =>
                  <ToggleButton key={i} value={i}>
                    <div className="quadrado" style={{backgroundColor: c}}></div>
                  </ToggleButton>)
              }
            </ToggleButtonGroup>
          </Container>
        </Box>
      </Container>
      {/* <Footer></Footer> sem o footer nessa página acho que fica melhor tb */}
    </>
  );
}

export default Dashboard;