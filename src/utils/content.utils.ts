import {
  computerChoice,
  currentStep,
  userChoice,
  userSelection,
} from '../stores/stores';
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
  setTimeout(() => {
    computerChoice.set(choices[Math.floor(Math.random() * choices.length)]);
    currentStep.set(steps.computerChoice);
  }, 2000);

  setTimeout(() => {
    currentStep.set(steps.result);
  }, 2000);
}

export function getClassByChoice(choice: (typeof choices)[number]) {
  if (choice === 'paper') return 'PaperContainer';
  if (choice === 'scissors') return 'ScissorsContainer';
  if (choice === 'rock') return 'RockContainer';
}
