import { evaluateAllCells } from '../../common/gameOfLifeUtils';

export function ticker (gridStore: number[][], updateGrid) {
	evaluateAllCells(gridStore, updateGrid);
}