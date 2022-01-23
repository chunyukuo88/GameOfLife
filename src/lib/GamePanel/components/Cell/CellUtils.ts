export const cellClickHandler = (gridStore, updateGrid, i: number, j: number): void => {
	const newGrid = JSON.parse(JSON.stringify(gridStore));
	newGrid[i][j] = gridStore[i][j] * -1;
	updateGrid(newGrid);
};