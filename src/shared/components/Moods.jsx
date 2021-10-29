import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSadTear, faFrown, faMeh, faSmile, faSmileBeam } from '@fortawesome/free-solid-svg-icons'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

export const moodColors = [
  '#F06292',
  '#9EC5E2',
  '#C8A4E9',
  '#64B5F6',
  '#A168F9',
]

const gray = '#A0A0A0'

export const moodLabels = ['Péssimo', 'Ruim', 'Meh', 'Bom', 'Ótimo']

const icons = [
  faSadTear,
  faFrown,
  faMeh,
  faSmile,
  faSmileBeam
]

export const MoodIcon = ({mood, on}) =>
  <FontAwesomeIcon icon={icons[mood]} color={on ? moodColors[mood] : gray} size="lg" />

export const MoodSelector = ({mood, setMood}) => {
  return  (
    <ToggleButtonGroup
      value={mood}
      exclusive
      onChange={(_, v) => setMood(v)}
    >
      {
        icons.map((_, i) =>
          <ToggleButton key={i} value={i}>
            <MoodIcon mood={i} on={mood === i} />
          </ToggleButton>
        )
      }
    </ToggleButtonGroup>
  )
}