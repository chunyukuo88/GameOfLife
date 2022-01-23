import {
	createGridStore,
	createIsTickingStore,
	createSpeedStore
} from './stores';

const gridStore = createGridStore();
const isTickingStore = createIsTickingStore();
const speedStore = createSpeedStore();

export const gridContext = {
	gridStore,
	updateGrid: (newGrid: number[][]) => gridStore.set(newGrid),
};

export const tickingContext = {
	isTickingStore,
	stopTicking: () => isTickingStore.set(false),
	startTicking: () => isTickingStore.set(true),
};

export const speedContext = {
	speedStore,
	updateSpeed: (newSpeed: number) => speedStore.set(newSpeed),
};
