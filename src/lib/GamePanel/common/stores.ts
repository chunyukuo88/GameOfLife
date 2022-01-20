import { writable } from "svelte/store";
import { produceSquareGrid } from './gameOfLifeUtils';

const startingGrid = produceSquareGrid(40);

export const gridStore = writable(startingGrid);