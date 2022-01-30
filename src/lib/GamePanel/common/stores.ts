import { writable } from 'svelte/store';
import { produceSquareGrid } from './gameOfLifeUtils';

const startingGrid = produceSquareGrid(100);

export const createStores = () => {
	const gridStore = writable(startingGrid);
	const gridLinesStore = writable(false);
	const isTickingStore = writable(false);
	const speedStore = writable(20);
	return {
		gridStore,
		gridLinesStore,
		isTickingStore,
		speedStore,
	};
};