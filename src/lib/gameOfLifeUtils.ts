type Grid = number[][];

export const cellClickHandler = (gridContext, row: number, value: number): void => {
	const { grid, updateGrid } = gridContext;
	const newGrid = [...grid];
	newGrid[row][value] = -1 * grid[row][value];
	updateGrid(newGrid);
};

export const evaluateAllCells = (gridContext, grid: Grid): void => {
	const { updateGrid } = gridContext;
	let newGrid = [...grid];
	for (let i = 0; i < grid.length; i++){
		if (i === 0) {
			newGrid = evaluateTopRow(grid, grid[i], i);
		} else if (i > 0 && i < grid.length - 1) {
			newGrid = evaluateInteriorRow(grid, grid[i], i);
		} else {
			newGrid = evaluateBottomRow(grid, grid[i], i);
		};
	}
	updateGrid(newGrid);
};

const evaluateTopRow = (grid: Grid, row, i): number[][] => {
	for (let j = 0; j < row.length; j++) {
		let neighbors = 0;
		if (j === 0) {
			const [eastNeighbor, southNeighbor, seNeighbor] = getNeighborsForUpperLeftCorner(grid, i, j);
			if (eastNeighbor === 1 ) neighbors++;
			if (southNeighbor === 1 ) neighbors++;
			if (seNeighbor === 1 ) neighbors++;
		}
		if (j > 0 && j < row.length - 1) {
			const [westNeighbor, eastNeighbor, swNeighbor, southNeighbor, seNeighbor] = getNeighborsForTopMiddleVals(grid, i, j);
			if (westNeighbor === 1 ) neighbors++;
			if (eastNeighbor === 1 ) neighbors++;
			if (swNeighbor === 1 ) neighbors++;
			if (southNeighbor === 1 ) neighbors++;
			if (seNeighbor === 1 ) neighbors++;
		}
		if (j === row.length - 1){
			const [westNeighbor, swNeighbor, southNeighbor] = getNeighborsForUpperRightCorner(grid, i, j);
			if (westNeighbor === 1 ) neighbors++;
			if (swNeighbor === 1 ) neighbors++;
			if (southNeighbor === 1 ) neighbors++;
		}
		if (neighbors > 3 || neighbors < 2) grid[i][j] = -1;
	}
	return grid;
};

const getNeighborsForTopMiddleVals = (grid: Grid, i, j): number[] => {
	return [
		grid[i][j-1],
		grid[i][j+1],
		grid[i+1][j-1],
		grid[i+1][j],
		grid[i+1][j+1],
	];
}
const getNeighborsForUpperLeftCorner = (grid: Grid, i, j) => [grid[i][j+1], grid[i+1][j], grid[i+1][j+1]];
const getNeighborsForUpperRightCorner = (grid: Grid, i, j) => [grid[i][j-1], grid[i+1][j-1], grid[i+1][j]];
const evaluateBottomRow = (grid: Grid, row, i): number[][] => {
	const newGrid = [...grid];
	for (let j = 0; j < row.length; j++) {
		let neighbors = 0;
		if (j === 0) {
			const [northNeighbor, neNeighbor, eastNeighbor] = getNeighborsForLowerLeftCorner(grid, i, j);
			if (northNeighbor === 1 ) neighbors++;
			if (neNeighbor === 1 ) neighbors++;
			if (eastNeighbor === 1 ) neighbors++;
		}
		else if (j > 0 && j < row.length - 1) {
			const [nwNeighbor, northNeighbor, westNeighbor] = getNeighborsForLowerRightCorner(grid, i, j);
			if (nwNeighbor === 1 ) neighbors++;
			if (northNeighbor === 1 ) neighbors++;
			if (westNeighbor === 1 ) neighbors++;
		}
		else {
			const [nwNeighbor, northNeighbor, neNeighbor, westNeighbor, eastNeighbor] = getNeighborsForBottomMiddleVals(grid, i, j);
			if (nwNeighbor === 1 ) neighbors++;
			if (northNeighbor === 1 ) neighbors++;
			if (neNeighbor === 1 ) neighbors++;
			if (westNeighbor === 1 ) neighbors++;
			if (eastNeighbor === 1 ) neighbors++;
		}
		if (neighbors > 3 || neighbors < 2) newGrid[i][j] = -1;
	}
	return newGrid;
};

const getNeighborsForBottomMiddleVals = (grid: Grid, i, j) => {
	return [
		grid[i-1][j-1],
		grid[i-1][j],
		grid[i-1][j+1],
		grid[i][j-1],
		grid[i][j+1],
	];
}
const getNeighborsForLowerLeftCorner = (grid: Grid, i, j) => [grid[i-1][j], grid[i-1][j+1], grid[i][j+1]];
const getNeighborsForLowerRightCorner = (grid: Grid, i, j) => [grid[i-1][j-1], grid[i-1][j], grid[i][j-1]];

const evaluateInteriorRow = (grid: Grid, row, i):number[][] => {
	const newGrid = [...grid];
	for (let j = 0; j < row.length - 1; j++){
		const totalNeighbors = getTotalNeighbors(grid, i, j);
		if (totalNeighbors > 3 || totalNeighbors < 2) {
			newGrid[i][j] = -1;
		}
	}
	return newGrid;
};

const getTotalNeighbors = (grid: Grid, i, j):number => {
	let totalNeighbors = 0;
	if (j === 0) {
		const eastNeighbor = grid[i][j + 1 ];
		const neNeighbor = grid[i - 1][j + 1];
		const northNeighbor = grid[i - 1][j];
		const seNeighbor = grid[i + 1][j + 1];
		const southNeighbor = grid[i + 1][j];
		if (eastNeighbor  === 1) totalNeighbors++;
		if (neNeighbor    === 1) totalNeighbors++;
		if (northNeighbor === 1) totalNeighbors++;
		if (seNeighbor    === 1) totalNeighbors++;
		if (southNeighbor === 1) totalNeighbors++;
	} else if (i > 0 && i < grid.length - 1) {
		const eastNeighbor = grid[i][j + 1 ];
		const westNeighbor = grid[i][j - 1 ];
		const nwNeighbor = grid[i - 1][j - 1];
		const northNeighbor = grid[i - 1][j];
		const neNeighbor = grid[i - 1][j + 1];
		const swNeighbor = grid[i + 1][j - 1];
		const southNeighbor = grid[i + 1][j];
		const seNeighbor = grid[i + 1][j + 1];
		if (eastNeighbor === 1) totalNeighbors++;
		if (westNeighbor === 1) totalNeighbors++;
		if (nwNeighbor === 1) totalNeighbors++;
		if (northNeighbor === 1) totalNeighbors++;
		if (neNeighbor === 1) totalNeighbors++;
		if (swNeighbor === 1) totalNeighbors++;
		if (southNeighbor === 1) totalNeighbors++;
		if (seNeighbor === 1) totalNeighbors++;
	} else {
		const westNeighbor = grid[i][j - 1 ];
		const nwNeighbor = grid[i - 1][j - 1];
		const northNeighbor = grid[i - 1][j];
		const swNeighbor = grid[i + 1][j - 1];
		const southNeighbor = grid[i + 1][j];
		if (westNeighbor === 1) totalNeighbors++;
		if (nwNeighbor === 1) totalNeighbors++;
		if (northNeighbor === 1) totalNeighbors++;
		if (swNeighbor === 1) totalNeighbors++;
		if (southNeighbor === 1) totalNeighbors++;
	}
	return totalNeighbors;
};