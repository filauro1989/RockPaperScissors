import { derived, writable } from 'svelte/store';
import type { PickedChoice, choices } from '../utils/content.constants';

export const innerWidth = writable(0);

export const isMobile = derived(innerWidth, ($innerWidth) => $innerWidth < 768);

export const userSelection = writable<PickedChoice | null>(null);
export const userChoice = writable<(typeof choices)[number] | null>(null);

export const computerChoice = writable<(typeof choices)[number] | null>(null);

// export const derivedResult = derived(
//   [userSelection, computerChoice],
//   ([$userSelection, $computerChoice]) => {
//     if (!$userSelection) return;
//     return $userSelection[$computerChoice];
//   }
// );

export const currentStep = writable(0);
