import { cellClickHandler, evaluateAllCells, produceSquareGrid } from './gameOfLifeUtils';

/** RULES (from https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
At each step in time, the following transitions occur:
Any live cell with fewer than two live neighbours dies, as if by underpopulation.
Any live cell with two or three live neighbours lives on to the next generation.
Any live cell with more than three live neighbours dies, as if by overpopulation.
Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
 * */

let grid: number[][];

describe('gameOfLifeUtils.ts', ()=>{
	describe('produceSquareGrid()', ()=>{
		describe('GIVEN: An integer representing the desired side length', ()=>{
			it('THEN: It produces a 2D array of -1\'s representing a square.', ()=>{
				const expectedResult = [
					[ -1, -1, -1, -1 ],
					[ -1, -1, -1, -1 ],
					[ -1, -1, -1, -1 ],
					[ -1, -1, -1, -1 ],
				];

				const result = produceSquareGrid(4);

				expect(result).toEqual(expectedResult);
			});
		});
	});
	describe('cellClickHandler()', ()=>{
		describe('GIVEN: A gridContext object, and row & value coordinates', ()=>{
			describe('WHEN: All original grid values are negative', ()=>{
				it('THEN: It updates the grid using the method in the gridContext.', ()=>{
					grid = [ // all negatives
						[ -1, -1 ],
						[ -1, -1 ],
					];
					const gridContext = {
						grid,
						updateGrid: (newGrid) => grid = newGrid
					};
					const expectedResult = [
						[ -1, -1 ],
						[ -1,  1 ],
					];

					cellClickHandler(gridContext, 1, 1);

					expect(grid).toEqual(expectedResult);
				});
			});
		});
	});
	describe('evaluateAllCells()', ()=>{
		describe('SCENARIOS: These are classic Game Of Life shapes', ()=>{
			it('Propeller, near the lower-right corner.', ()=>{
				grid = [
					[ -1, -1, -1, -1 ],
					[ -1, -1,  1, -1 ],
					[ -1, -1,  1, -1 ],
					[ -1, -1,  1, -1 ],
				];
				const gridContext = {
					grid,
					updateGrid: (newGrid) => grid = newGrid
				};
				const expected = [ // Note the center row
					[ -1, -1, -1, -1 ],
					[ -1, -1, -1, -1 ],
					[ -1,  1,  1,  1 ],
					[ -1, -1, -1, -1 ],
				];

				evaluateAllCells(gridContext, grid)

				expect(grid).toEqual(expected);
			});
		});
	});
});
