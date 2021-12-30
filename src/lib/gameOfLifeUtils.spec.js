import { cellClickHandler } from './gameOfLifeUtils';

describe('cellClickHandler()', ()=>{
	describe('GIVEN: A gridContext object, and row & value coordinates', ()=>{
		describe('WHEN: All original grid values are negative', ()=>{
			it('THEN: It updates the grid using the method in the gridContext.', ()=>{
				let grid = [ // all negatives
					[ -1, -1, -1 ],
					[ -1, -1, -1 ],
					[ -1, -1, -1 ],
				];
				const expectedResult = [
					[ -1, -1, -1 ],
					[ -1,  1, -1 ], // note the positive 1
					[ -1, -1, -1 ],
				];
				const gridContext = {
					grid,
					updateGrid: (newGrid) => grid = newGrid
				};

				cellClickHandler(gridContext, 1, 1);

				expect(grid).toEqual(expectedResult);
			});
		});
	})
})
