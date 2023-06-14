export const paper = {
  paper: 'draw',
  rock: 'win',
  scissors: 'lose',
} as const;
export const rock = {
  paper: 'lose',
  rock: 'draw',
  scissors: 'win',
} as const;
export const scissors = {
  paper: 'win',
  rock: 'lose',
  scissors: 'draw',
} as const;

export type PickedChoice = typeof paper | typeof rock | typeof scissors;

export const choices = ['paper', 'scissors', 'rock'] as const;
