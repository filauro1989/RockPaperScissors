import { currentStep, userChoice, userSelection } from '../stores/stores';
import { choices, paper, rock, scissors, steps } from './content.constants';

export function getResult(userSelection, computerChoice) {
  if (!userSelection) return;

  return userSelection[computerChoice];
}

export function selectChoice(choice: (typeof choices)[number]) {
  if (choice === 'paper') {
    userSelection.set(paper);
  } else if (choice === 'rock') {
    userSelection.set(rock);
  } else if (choice === 'scissors') {
    userSelection.set(scissors);
  }

  userChoice.set(choice);
  currentStep.set(steps.awaitComputerChoice);
  // computerChoice.set(choices[Math.floor(Math.random() * choices.length)]);
}

export function getClassByChoice(choice: (typeof choices)[number]) {
  if (choice === 'paper') return 'PaperContainer';
  if (choice === 'scissors') return 'ScissorsContainer';
  if (choice === 'rock') return 'RockContainer';
}
