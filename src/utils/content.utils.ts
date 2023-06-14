import {
  userSelection,
  type PickedChoice,
  computerChoice,
  choices,
} from '../stores/stores';

export function getResult(userSelection, computerChoice) {
  if (!userSelection) return;

  return userSelection[computerChoice];
}

export function selectChoice(choice: PickedChoice) {
  userSelection.set(choice);
  computerChoice.set(choices[Math.floor(Math.random() * choices.length)]);
}
