import React from 'react'

export const validatePassword = (input) => {
  if (input === '') return false;
  return !(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(input))
}
