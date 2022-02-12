import type { Grid } from './types';

export const createGridContext = (stores) => {
	const {
		gridStore,
		gridLinesStore,
		isTickingStore,
		speedStore,
	} = stores;
	return {
		gridStore,
		updateGrid: (newGrid: Grid) => gridStore.set(newGrid),
		gridLinesStore,
		toggleGridLines: (newValue: boolean) => gridLinesStore.set(newValue),
		isTickingStore,
		stopTicking: () => isTickingStore.set(false),
		startTicking: () => isTickingStore.set(true),
		speedStore,
		updateSpeed: (newSpeed: number) => speedStore.set(newSpeed),
	};
};

