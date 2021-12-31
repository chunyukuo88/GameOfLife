import { cellClickHandler, evaluateAllCells } from './gameOfLifeUtils';

/** RULES (from https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
At each step in time, the following transitions occur:
Any live cell with fewer than two live neighbours dies, as if by underpopulation.
Any live cell with two or three live neighbours lives on to the next generation.
Any live cell with more than three live neighbours dies, as if by overpopulation.
Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
 * */

describe('gameOfLifeUtils.ts', ()=>{
	describe('cellClickHandler()', ()=>{
		describe('GIVEN: A gridContext object, and row & value coordinates', ()=>{
			describe('WHEN: All original grid values are negative', ()=>{
				it('THEN: It updates the grid using the method in the gridContext.', ()=>{
					let grid = [ // all negatives
						[ -1, -1 ],
						[ -1, -1 ],
					];
					const expectedResult = [
						[ -1, -1 ],
						[ -1,  1 ],
					];
					const gridContext = {
						grid,
						updateGrid: (newGrid) => grid = newGrid
					};

					cellClickHandler(gridContext, 1, 1);

					expect(grid).toEqual(expectedResult);
				});
			});
		});
	});
	describe('evaluateAllCells()', ()=>{
		describe('WHEN: The cell has only one neighbor', ()=>{
			it('THEN: all cells die.', ()=>{
				const grid = [
					[ -1,  1,  1 ],
					[ -1, -1, -1 ],
					[ -1, -1, -1 ],
				];
				const expected = [
					[ -1, -1, -1 ],
					[ -1, -1, -1 ],
					[ -1, -1, -1 ],
				];

				const result = evaluateAllCells(grid)

				expect(result).toEqual(expected);
			});
		});
		describe('WHEN: The 2 living cells have no neighbors', ()=>{
			it('THEN: all cells die.', ()=>{
				const grid = [
					[ -1, -1,  1 ],
					[ -1, -1, -1 ],
					[  1, -1, -1 ],
				];
				const expected = [
					[ -1, -1, -1 ],
					[ -1, -1, -1 ],
					[ -1, -1, -1 ],
				];

				const result = evaluateAllCells(grid)

				expect(result).toEqual(expected);
			});
		});
	});
});
