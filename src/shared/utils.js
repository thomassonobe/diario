import Meh from './components/Icons/Meh';
import SadTear from './components/Icons/SadTear';
import MehBlank from './components/Icons/MehBlank';
import SmileBeam from './components/Icons/SmileBeam';
import SmileWink from './components/Icons/SmileWink';
import React from 'react'

export const validatePassword = (input) => {
  if (input === '') return false;
  return !(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(input))
}

export const selectIcon = (index) => {
  return index === 0 ? <SadTear /> : index === 1 ? <Meh /> : index === 2 ? <MehBlank /> : index === 3 ? <SmileBeam /> : index === 4 ? <SmileWink /> : null
}