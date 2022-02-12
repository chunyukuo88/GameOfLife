import { evaluateAllCells } from '../../../common/gameOfLifeUtils';

export function ticker (gridStore, updateGrid) {
	evaluateAllCells(gridStore, updateGrid);
}
