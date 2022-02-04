import {
	evaluateAllCells,
	produceSquareGrid,
	randomGrid,
	resetGrid,
	startingGrid,
	updateWithPattern
} from './gameOfLifeUtils';
import { patternLabels, patterns } from './patterns';


describe('gameOfLifeUtils.ts', ()=>{
	describe('resetGrid()', ()=>{
		describe('GIVEN: a grid context object containing a method', ()=>{
			describe('WHEN: No additional argument is given,', ()=>{
				it('THEN: it executes the method with startingGrid as a parameter.', ()=>{
					const updateGrid = jest.fn();

					resetGrid(updateGrid);

					expect(updateGrid).toBeCalledWith(startingGrid);
				});
			});
			describe('WHEN: An additional grid argument is given,', ()=>{
				it('THEN: it executes the method with the given grid argument.', ()=>{
					const updateGrid = jest.fn();

					resetGrid(updateGrid, randomGrid);

					expect(updateGrid).toBeCalledWith(randomGrid);
				});
			});
		});
	});
	describe('produceSquareGrid()', ()=>{
		describe('GIVEN: An integer representing the desired side length,', ()=>{
			describe('WHEN: No additional argument is given,', ()=>{
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
			describe('WHEN: Given an additional "isRandom" argument, equal to true,', ()=>{
				it('THEN: It produces a 2D array of random cell values.', ()=>{
					const flattenedResult = produceSquareGrid(4, true).flat();

					expect(flattenedResult).toContain(1);
					expect(flattenedResult).toContain(-1);
				});
			});
		});
		describe('WHEN: this function is not passed any arguments', ()=>{
			it('THEN: It produces a non-random, 2D square array with a side length of 20.', ()=>{
				const result = produceSquareGrid();

				expect(result).toHaveLength(20);
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
	describe('updateWithPattern()', ()=>{
		describe('WHEN: Given an updateGrid fn and a pattern', ()=>{
			it('THEN: The updateGrid is invoked with the pattern as an argument.', ()=>{
				const updateGrid = jest.fn();
				const label = patternLabels.FOR_UNIT_TESTING;

				updateWithPattern(updateGrid, label);

				expect(updateGrid).toHaveBeenCalledWith(patterns[label]);
			});
		});
	});
});
