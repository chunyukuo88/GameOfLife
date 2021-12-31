type Grid = number[][];

const startingGrid = [
	[ -1, -1, -1, -1, -1, -1, -1 ],
	[ -1, -1, -1, -1, -1, -1, -1 ],
	[ -1, -1, -1, -1, -1, -1, -1 ],
	[ -1, -1, -1, -1, -1, -1, -1 ],
	[ -1, -1, -1, -1, -1, -1, -1 ],
	[ -1, -1, -1, -1, -1, -1, -1 ],
	[ -1, -1, -1, -1, -1, -1, -1 ],
];

export const cellClickHandler = (gridContext, row: number, value: number): void => {
	const { grid, updateGrid } = gridContext;
	const newGrid = [...grid];
	newGrid[row][value] = -1 * grid[row][value];
	updateGrid(newGrid);
};

export const resetGrid = (gridContext) => {
	const { updateGrid } = gridContext;
	updateGrid(startingGrid);
}

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
	let newGrid = [...grid];
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
		newGrid = updateNewGrid(grid, newGrid, neighbors, i, j);
	}
	return newGrid;
};
const updateNewGrid = (grid, newGrid, neighbors, i, j) => {
	if (lethalConditions(neighbors))
		cellDies(newGrid, i, j);
	if (healthyConditions(neighbors, grid, i, j))
		cellSpawns(newGrid, i, j);
	return newGrid;
};

const lethalConditions = (neighbors) => neighbors > 3 || neighbors < 2;
const healthyConditions = (neighbors, grid, i, j) => neighbors === 3 || (grid[i][j] === 1 && neighbors === 2);
const cellDies = (grid, i, j) => grid[i][j] = -1;
const cellSpawns = (grid, i, j) => grid[i][j] = 1;
const getNeighborsForTopMiddleVals = (grid: Grid, i, j): number[] => [grid[i][j-1], grid[i][j+1], grid[i+1][j-1], grid[i+1][j], grid[i+1][j+1]];
const getNeighborsForUpperLeftCorner = (grid: Grid, i, j) => [grid[i][j+1], grid[i+1][j], grid[i+1][j+1]];
const getNeighborsForUpperRightCorner = (grid: Grid, i, j) => [grid[i][j-1], grid[i+1][j-1], grid[i+1][j]];
const evaluateBottomRow = (grid: Grid, row, i): number[][] => {
	let newGrid = [...grid];
	for (let j = 0; j < row.length; j++) {
		let neighbors = 0;
		if (j === 0)
			neighbors = addEachNeighbor(neighbors, getNeighborsForLowerLeftCorner(grid, i, j));
		if (j > 0 && j < row.length - 1)
			neighbors = addEachNeighbor(neighbors, getNeighborsForBottomMiddleVals(grid, i, j));
		if (j === row.length - 1)
			neighbors = addEachNeighbor(neighbors, getNeighborsForLowerRightCorner(grid, i, j));
		newGrid = updateNewGrid(grid, newGrid, neighbors, i, j);
	}
	return newGrid;
};
const getNeighborsForBottomMiddleVals = (grid: Grid, i, j) => [
	grid[i-1][j-1],
	grid[i-1][j],
	grid[i-1][j+1],
	grid[i][j-1],
	grid[i][j+1],
];
const getNeighborsForLowerLeftCorner = (grid: Grid, i, j) => [grid[i-1][j], grid[i-1][j+1], grid[i][j+1]];
const getNeighborsForLowerRightCorner = (grid: Grid, i, j) => [grid[i-1][j-1], grid[i-1][j], grid[i][j-1]];

const evaluateInteriorRow = (grid: Grid, row, i):number[][] => {
	let newGrid = [...grid];
	for (let j = 0; j < row.length - 1; j++){
		const neighbors = getTotalNeighbors(grid, i, j);
		newGrid = updateNewGrid(grid, newGrid, neighbors, i, j);
	}
	return newGrid;
};

//For cells in interior rows, i.e. not the top or bottom rows.
const getTotalNeighbors = (grid: Grid, i, j):number => {
	let totalNeighbors = 0;
	if (j === 0)
		totalNeighbors = addEachNeighbor(totalNeighbors, getLeftEdgeNeighbors(grid, i, j));
	if (j > 0 && j < grid.length - 1)
		totalNeighbors = addEachNeighbor(totalNeighbors, getCentralNeighbors(grid, i, j));
	if (j === grid.length - 1)
		totalNeighbors = addEachNeighbor(totalNeighbors, getRightEdgeNeighbors(grid, i, j));
	return totalNeighbors;
};

const addEachNeighbor = (totalNeighbors: number, arrayOfNeighborValues: number[]) => {
	arrayOfNeighborValues.forEach(value => (value === 1) && totalNeighbors++);
	return totalNeighbors;
};

//Gets the neighbors of a cell that is not along the top or bottom rows but is along the right edge.
const getRightEdgeNeighbors = (grid, i, j): number[] => [
	grid[i - 1][j], grid[i - 1][j - 1], grid[i][j - 1], grid[i + 1][j - 1], grid[i + 1][j]
];

//Gets the neighbors of a cell that is not along the top or bottom rows but is along the left edge.
const getLeftEdgeNeighbors = (grid, i, j): number[] => [
	grid[i - 1][j], grid[i - 1][j + 1], grid[i][j + 1 ], grid[i + 1][j + 1], grid[i + 1][j]
];

//Gets the neighbors of a cell that is not an edge cell.
const getCentralNeighbors = (grid, i, j) => [
	grid[i][j + 1], grid[i + 1][j + 1], grid[i + 1][j], grid[i + 1][j - 1], grid[i][j - 1], grid[i - 1][j - 1], grid[i - 1][j], grid[i - 1][j + 1],
];