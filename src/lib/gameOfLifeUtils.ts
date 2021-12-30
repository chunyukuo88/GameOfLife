type Grid = number[][];

export const cellClickHandler = (gridContext, row: number, value: number): void => {
	const { grid, updateGrid } = gridContext;
	const newGrid = [...grid];
	newGrid[row][value] = -1 * newGrid[row][value];
	updateGrid(newGrid);
};

export const evaluateAllCells = (grid: Grid) => {
	const newGrid = [...grid];
	for (let i = 0; i < newGrid.length - 1; i++){
		const row = newGrid[i];
		if (i === 0) {
			evaluateTopRow(newGrid, row, i);
		} else if (i === newGrid.length - 1) {
			evaluateBottomRow(newGrid, row, i);
		} else evaluateMiddleRows(newGrid, row, i);
	};
	return newGrid;
};

const evaluateTopRow = (newGrid: Grid, row, i) => {
	for (let j = 0; j < row.length - 1; j++) {
		let neighbors = 0;
		if (j === 0) {
			const [eastNeighbor, southNeighbor, seNeighbor] = getNeighborsForUpperLeftCorner(newGrid, i, j);
			if (eastNeighbor === 1 ) neighbors++;
			if (southNeighbor === 1 ) neighbors++;
			if (seNeighbor === 1 ) neighbors++;
		}
		if (j > 0 && j < row.length - 1) {
			const [westNeighbor, eastNeighbor, swNeighbor, southNeighbor, seNeighbor] = getNeighborsForTopMiddleVals(newGrid, i, j);
			if (westNeighbor === 1 ) neighbors++;
			if (eastNeighbor === 1 ) neighbors++;
			if (swNeighbor === 1 ) neighbors++;
			if (southNeighbor === 1 ) neighbors++;
			if (seNeighbor === 1 ) neighbors++;
		}
		if (j === row.length - 1){
			const [westNeighbor, swNeighbor, southNeighbor] = getNeighborsForUpperRightCorner(newGrid, i, j);
			if (westNeighbor === 1 ) neighbors++;
			if (swNeighbor === 1 ) neighbors++;
			if (southNeighbor === 1 ) neighbors++;
		}
		if (neighbors > 3 || neighbors < 2) newGrid[i][j] = -1;
	}
};

const getNeighborsForTopMiddleVals = (newGrid: Grid, i, j) => {
	return [
		newGrid[i][j-1],
		newGrid[i][j+1],
		newGrid[i+1][j-1],
		newGrid[i+1][j],
		newGrid[i+1][j+1],
	];
}
const getNeighborsForUpperLeftCorner = (newGrid: Grid, i, j) => [newGrid[i][j+1], newGrid[i+1][j], newGrid[i+1][j+1]];
const getNeighborsForUpperRightCorner = (newGrid: Grid, i, j) => [newGrid[i][j-1], newGrid[i+1][j-1], newGrid[i+1][j]];
const evaluateBottomRow = (newGrid: Grid, row, i) => {
	for (let j = 0; j < row.length - 1; j++) {
		let neighbors = 0;
		if (j === 0) {
			const [northNeighbor, neNeighbor, eastNeighbor] = getNeighborsForLowerLeftCorner(newGrid, i, j);
			if (northNeighbor === 1 ) neighbors++;
			if (neNeighbor === 1 ) neighbors++;
			if (eastNeighbor === 1 ) neighbors++;
		} else if (j === row.length - 1) {
			const [nwNeighbor, northNeighbor, westNeighbor] = getNeighborsForLowerRightCorner(newGrid, i, j);
			if (nwNeighbor === 1 ) neighbors++;
			if (northNeighbor === 1 ) neighbors++;
			if (westNeighbor === 1 ) neighbors++;
		}
		else {
			const [nwNeighbor, northNeighbor, neNeighbor, westNeighbor, eastNeighbor] = getNeighborsForBottomMiddleVals(newGrid, i, j);
			if (nwNeighbor === 1 ) neighbors++;
			if (northNeighbor === 1 ) neighbors++;
			if (neNeighbor === 1 ) neighbors++;
			if (westNeighbor === 1 ) neighbors++;
			if (eastNeighbor === 1 ) neighbors++;
		}
		if (neighbors > 3 || neighbors < 2) newGrid[i][j] = -1;
	}
};

const getNeighborsForBottomMiddleVals = (newGrid: Grid, i, j) => {
	return [
		newGrid[i-1][j-1],
		newGrid[i-1][j],
		newGrid[i-1][j+1],
		newGrid[i][j-1],
		newGrid[i][j+1],
	];
}
const getNeighborsForLowerLeftCorner = (newGrid: Grid, i, j) => [newGrid[i-1][j], newGrid[i-1][j+1], newGrid[i][j+1]];
const getNeighborsForLowerRightCorner = (newGrid: Grid, i, j) => [newGrid[i-1][j-1], newGrid[i-1][j], newGrid[i][j-1]];

const evaluateMiddleRows = (newGrid: Grid, row, i) => {
	for (let j = 0; j < row.length - 1; j++){
		let currentCell = newGrid[i][j];
		const totalLivingNeighbors = getTotalLivingNeighbors(newGrid, i, j);
		if (totalLivingNeighbors > 2) {
			currentCell = -1;
		}
	}
};

const getTotalLivingNeighbors = (newGrid: Grid, i, j): number => {
	let totalLivingNeighbors = 0;
	const nwNeighbor = newGrid[i - 1][j - 1];
	const northNeighbor = newGrid[i - 1][j];
	const neNeighbor = newGrid[i - 1][j + 1];
	if (nwNeighbor !== undefined && nwNeighbor === 1) totalLivingNeighbors++;
	if (northNeighbor && northNeighbor === 1) totalLivingNeighbors++;
	if (neNeighbor && neNeighbor === 1) totalLivingNeighbors++;


	if (newGrid[i][j - 1 ] && newGrid[i][j - 1 ] === 1) totalLivingNeighbors++;
	if (newGrid[i][j + 1 ] && newGrid[i][j + 1 ]=== 1) totalLivingNeighbors++;


	if (newGrid[i + 1][j - 1] && newGrid[i + 1][j - 1] === 1) totalLivingNeighbors++;
	if (newGrid[i + 1][j] && newGrid[i + 1][j] === 1) totalLivingNeighbors++;
	if (newGrid[i + 1][j + 1] && newGrid[i + 1][j + 1] === 1) totalLivingNeighbors++;
	return totalLivingNeighbors;
};