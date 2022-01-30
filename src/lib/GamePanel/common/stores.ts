import { writable } from 'svelte/store';
import { produceSquareGrid } from './gameOfLifeUtils';

const startingGrid = produceSquareGrid(50);

export const createGridStore = () => writable(startingGrid);
export const createIsTickingStore = () => writable(false);
export const createSpeedStore = () => writable(20);
export const createGridLinesStore = () => writable(false);