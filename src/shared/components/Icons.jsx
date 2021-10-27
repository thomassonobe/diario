import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSadTear, faFrown, faMeh, faSmile, faSmileBeam } from '@fortawesome/free-solid-svg-icons'

export const moodColors = [
  '#F06292',
  '#9EC5E2',
  '#C8A4E9',
  '#64B5F6',
  '#A168F9',
]

const gray = '#A0A0A0'

const AwfulMood = ({on}) => <FontAwesomeIcon icon={faSadTear}   color={on ? moodColors[0] : gray} size="lg" />
const BadMood   = ({on}) => <FontAwesomeIcon icon={faFrown}     color={on ? moodColors[1] : gray} size="lg" />
const MehMood   = ({on}) => <FontAwesomeIcon icon={faMeh}       color={on ? moodColors[2] : gray} size="lg" />
const GoodMood  = ({on}) => <FontAwesomeIcon icon={faSmile}     color={on ? moodColors[3] : gray} size="lg" />
const GreatMood = ({on}) => <FontAwesomeIcon icon={faSmileBeam} color={on ? moodColors[4] : gray} size="lg" />

export const moodIcons = [AwfulMood, BadMood, MehMood, GoodMood, GreatMood]
export const moodLabels = ['Péssimo', 'Ruim', 'Meh', 'Bom', 'Ótimo']

