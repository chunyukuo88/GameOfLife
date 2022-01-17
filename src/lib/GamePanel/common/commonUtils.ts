import { gridStore } from './stores';

export const createGridContext = () => ({
	gridStore,
	updateGrid: (newGrid) => gridStore.set(newGrid)
});