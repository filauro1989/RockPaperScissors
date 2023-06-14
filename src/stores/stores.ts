import { derived, writable } from 'svelte/store';
import type { PickedChoice, choices } from '../utils/content.constants';

export const innerWidth = writable(0);

export const isMobile = derived(innerWidth, ($innerWidth) => $innerWidth < 768);

export const currentStep = writable(0);

export const userSelection = writable<PickedChoice | null>(null);
export const userChoice = writable<(typeof choices)[number] | null>(null);
export const computerChoice = writable<(typeof choices)[number] | null>(null);

export const score = writable(0);

export const derivedResult = derived(
  [userSelection, computerChoice],
  ([$userSelection, $computerChoice]) => {
    if (!$userSelection) return;
    return $userSelection[$computerChoice];
  }
);

export const isWin = derived(
  derivedResult,
  ($derivedResult) => $derivedResult === 'win'
);

export function resetStore() {
  currentStep.set(0);
  userSelection.set(null);
  userChoice.set(null);
  computerChoice.set(null);
}
