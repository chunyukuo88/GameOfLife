import {
	cellClickHandler,
	evaluateAllCells,
	produceSquareGrid,
	resetGrid,
	startingGrid
} from './gameOfLifeUtils';

/** RULES (from https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
 - At each step in time, the following transitions occur:
 - Any live cell with fewer than two live neighbours dies, as if by underpopulation.
 - Any live cell with two or three live neighbours lives on to the next generation.
 - Any live cell with more than three live neighbours dies, as if by overpopulation.
 - Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
 * */

let grid: number[][];

describe('gameOfLifeUtils.ts', ()=>{
	describe('resetGrid()', ()=>{
		describe('GIVEN: a grid context object containing a method', ()=>{
			it('THEN: it executes the method with startingGrid as a parameter.', ()=>{
				const updateGrid = jest.fn();

				resetGrid(updateGrid);

				expect(updateGrid).toBeCalledWith(startingGrid);
			});
		});
	});
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
				expect(result).toHaveLength(4);
			});
		});
		describe('GIVEN: this function is not passed a parameter', ()=>{
			it('THEN: It produces a 2D square array with a side length of 20.', ()=>{
				const result = produceSquareGrid();

				expect(result).toHaveLength(20);
			});
		});
	});
	describe('cellClickHandler()', ()=>{
		describe('GIVEN: A gridContext object, and row & value coordinates', ()=>{
			describe('WHEN: All original grid values are negative', ()=>{
				it('THEN: It updates the grid using the method in the gridContext.', ()=>{
					const gridStore = [
						[ -1, -1 ],
						[ -1,  1 ],
					];
					const updateGrid = jest.fn();
					const expectedResult = [
						[ -1, -1 ],
						[ -1, -1 ],
					];

					cellClickHandler(gridStore, updateGrid, 1, 1);

					expect(updateGrid).toHaveBeenCalledWith(expectedResult);
				});
			});
		});
	});
	describe('evaluateAllCells()', ()=>{
		describe('SCENARIOS: These are classic Game Of Life shapes', ()=>{
			it('Propeller', ()=>{
				const gridStore = [ //propeller is near the lower-right corner
					[ -1, -1, -1, -1 ],
					[ -1, -1,  1, -1 ],
					[ -1, -1,  1, -1 ],
					[ -1, -1,  1, -1 ],
				];
				const updateGrid = jest.fn();
				const expected = [ // Note the center row
					[ -1, -1, -1, -1 ],
					[ -1, -1, -1, -1 ],
					[ -1,  1,  1,  1 ],
					[ -1, -1, -1, -1 ],
				];

				evaluateAllCells(gridStore, updateGrid)

				expect(updateGrid).toBeCalledWith(expected);
			});
			it('3-cell L -> 4-cell square', ()=>{
				const gridStore = [ // middle-right edge
					[ -1, -1, -1, -1 ],
					[ -1, -1,  1, -1 ],
					[ -1, -1,  1,  1 ],
					[ -1, -1, -1, -1 ],
				];
				const updateGrid = jest.fn();
				const expected = [ // Note the center row
					[ -1, -1, -1, -1 ],
					[ -1, -1,  1,  1 ],
					[ -1, -1,  1,  1 ],
					[ -1, -1, -1, -1 ],
				];

				evaluateAllCells(gridStore, updateGrid)

				expect(updateGrid).toBeCalledWith(expected);
			});
		});
	});
});
