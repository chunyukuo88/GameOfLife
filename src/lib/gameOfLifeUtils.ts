export const cellClickHandler = (gridContext, row: number, value: number): void => {
	const { grid, updateGrid } = gridContext;
	const newGrid = [...grid];
	newGrid[row][value] = -1 * newGrid[row][value];
	updateGrid(newGrid);
};
