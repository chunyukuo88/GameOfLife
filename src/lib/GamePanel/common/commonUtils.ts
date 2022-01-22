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
		speedStore,
	updateSpeed: (newSpeed) => {
		console.log('updateSpeed()');
		speedStore.set(newSpeed);
	},
		isTickingStore,
	updateTicking: () => {
		console.log('updateTicking()');
		isTickingStore.set(!isTickingStore);
	},
});
