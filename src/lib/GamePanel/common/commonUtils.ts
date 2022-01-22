import {
	createGridStore,
	createIsTickingStore,
	createSpeedStore
} from './stores';

const gridStore = createGridStore();
const isTickingStore = createIsTickingStore();
const speedStore = createSpeedStore();

export const createGridContext = () => ({
	gridStore,
	updateGrid: (newGrid) => gridStore.set(newGrid),
});

export const createTickingContext = () => ({
	isTickingStore,
	stopTicking: () => isTickingStore.set(false),
});

export const createSpeedContext = () => ({
	speedStore,
	updateSpeed: (newSpeed) => speedStore.set(newSpeed),
});
