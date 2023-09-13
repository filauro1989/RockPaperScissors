import PaperIcon from '/src/lib/images/icon-paper.svg';
import RockIcon from '/src/lib/images/icon-rock.svg';
import ScissorsIcon from '/src/lib/images/icon-scissors.svg';

export const icons = {
  paper: PaperIcon,
  rock: RockIcon,
  scissors: ScissorsIcon,
};

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

export enum steps {
  playerChoice,
  awaitComputerChoice,
  computerChoice,
  result,
}
