import * as React from 'react';
import Header from '../../shared/components/Header'
import Container from '@material-ui/core/Container';
import NoteCard from './components/Card'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Gatinho from "../../img/hello.png"
import './index.css'
import Footer from '../../shared/components/Footer'
import { Typography } from '@material-ui/core';
import { Notes } from '../../services/notes';


const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Dashboard = ({auth, setAuth}) => {
  const [tab, setTab] = React.useState(0);
  const [notes, setNotes] = React.useState([]);
  const [filteredNotes, setFilteredNotes] = React.useState([]);

  React.useEffect(() => {
    if (tab === 0) {
      setFilteredNotes(notes.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)))
    } else if (tab === 1) {
      setFilteredNotes(notes.sort((a, b) => a.mood - b.mood))
    } else if (tab === 2) {
      setFilteredNotes(notes.sort((a, b) => b.timestamp - a.timestamp))
    }
  }, [tab])

  React.useEffect(() => {
    if (auth) {
      Notes.get(auth)
        .then(newNotes => {
          setNotes(newNotes)
          setFilteredNotes(newNotes)
        })
        .catch(e => alert(e))
    } else {
      setNotes([])
      setFilteredNotes([])
    }
  }, [auth])

  return (
    <>
      <Header auth={auth} setAuth={setAuth} />
      <Container>
        {/* acho que fica melhor com a tela mais limpa pra ter espaço pras anotações */}
        {/* <div class="center">
          <img src={Gatinho} align="left" alt="" />
          <br />
          <h5>bem-vindo usuario!</h5>
        </div> */}
        <Box sx={{ width: '100%' }}>
          <Tabs value={tab} onChange={(_, value) => setTab(value)} centered>
            <Tab value={0} label="Todos" />
            <Tab value={1} label="Humor" />
            <Tab value={2} label="Data" />
          </Tabs>
        </Box>
      </Container>
      <Container>
        {
          filteredNotes.map((note, index) => <NoteCard key={index} note={note}
            auth={auth} setAuth={setAuth} />)
        }
      </Container>
      <Footer></Footer>
    </>
  );
}

export default Dashboard;