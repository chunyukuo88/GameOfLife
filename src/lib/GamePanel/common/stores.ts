import { writable } from "svelte/store";
import { produceSquareGrid } from './gameOfLifeUtils';

const startingGrid = produceSquareGrid(50);

export const createGridStore = () => {
	const gridStore = writable(startingGrid);
	return gridStore;
}

export const createIsTickingStore = () => {
	const isTickingStore = writable(false);
	return isTickingStore;
};

export const createSpeedStore = () => {
	const speedStore = writable(20);
	return speedStore;
};