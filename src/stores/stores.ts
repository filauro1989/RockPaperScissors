import { derived, writable } from 'svelte/store';

export const innerWidth = writable(0);

export const isMobile = derived(innerWidth, ($innerWidth) => $innerWidth < 768);
