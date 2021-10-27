import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import Meh from '../../../shared/components/Icons/Meh';
import SadTear from '../../../shared/components/Icons/SadTear';
import MehBlank from '../../../shared/components/Icons/MehBlank';
import SmileBeam from '../../../shared/components/Icons/SmileBeam';
import SmileWink from '../../../shared/components/Icons/SmileWink';
import { MenuItem, Select } from '@material-ui/core';
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



const NoteDialog = ({ openDialog, setOpenDialog, daily }) => {
  const handleClose = () => {
    setOpenDialog({ ...openDialog, open: false });
  };
  const [dailyEdited, setDailyEdited] = React.useState(daily)

  return (
    <Dialog open={openDialog.open} onClose={handleClose} style={{ padding: '1em' }}>
      <DialogTitle>
        Adicionar anotação
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <TextField
            fullWidth
            label="Titulo"
            variant="standard"
            value={dailyEdited.title}
            onChange={(e) => setDailyEdited({ ...dailyEdited, title: e.target.value })}
          />
          <TextField
            fullWidth
            label="Anotação"
            variant="standard"
            value={dailyEdited.dailyNote}
            multiline
            rows={4}
            onChange={(e) => setDailyEdited({ ...dailyEdited, dailyNote: e.target.value })}
          />
          <Select
            value={dailyEdited.humor}
            onChange={(e) => setDailyEdited({ ...dailyEdited, humor: e.target.value })}
          >
            <MenuItem value={0}><SadTear /> Muito Baixo</MenuItem>
            <MenuItem value={1}><Meh /> Baixo</MenuItem>
            <MenuItem value={2}><MehBlank /> Médio</MenuItem>
            <MenuItem value={3}><SmileBeam /> Bom</MenuItem>
            <MenuItem value={4}><SmileWink /> Muito Bom</MenuItem>
          </Select>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleClose}>Salvar</Button>
      </DialogActions>
    </Dialog >
  );
}

export default NoteDialog