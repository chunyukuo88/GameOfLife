import { gridStore } from './stores';
// import { createGridStore } from './stores';

// const gridStore = createGridStore();

export const createGridContext = () => ({
	gridStore,
	updateGrid: (newGrid) => gridStore.set(newGrid)
});