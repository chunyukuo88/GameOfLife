import type { Grid } from './types';

export const createGridContext = (gridStore) => ({
	gridStore,
	updateGrid: (newGrid: Grid) => gridStore.set(newGrid),
});

export const createGridLinesContext = (gridLinesStore) => ({
	gridLinesStore,
	toggleGridLines: (newValue: boolean) => gridLinesStore.set(newValue)
});

export const createTickingContext = (isTickingStore) => ({
	isTickingStore,
	stopTicking: () => isTickingStore.set(false),
	startTicking: () => isTickingStore.set(true),
});

export const createSpeedContext = (speedStore) => ({
	speedStore,
	updateSpeed: (newSpeed: number) => speedStore.set(newSpeed),
});
