import { ticker } from './OnOffSwitchUtils';
import { evaluateAllCells } from '../../common/gameOfLifeUtils';

jest.mock('../../common/gameOfLifeUtils');
const mockedEvaluateAllCells = evaluateAllCells as jest.Mock<unknown>;

describe('ticker()', ()=>{
	describe('WHEN: Passed a gridStore object and updateGrid function,', ()=>{
		it('THEN: evaluateAllCells is invoked with those two arguments.', ()=>{
			mockedEvaluateAllCells.mockImplementation(jest.fn());
			const gridStore = [
				[1, 1],
				[1, 1],
			];
			const updateGrid = jest.fn();

			ticker(gridStore, updateGrid);

			expect(mockedEvaluateAllCells).toHaveBeenCalledWith(gridStore, updateGrid);
		});
	});
});