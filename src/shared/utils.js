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

const icons = [
  <SadTear />,
  <Meh />,
  <MehBlank />,
  <SmileBeam />,
  <SmileWink />
]

export const selectIcon = (index) => icons[index] || null