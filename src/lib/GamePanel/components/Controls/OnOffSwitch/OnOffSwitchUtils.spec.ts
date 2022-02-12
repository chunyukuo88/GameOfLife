import { ticker } from './OnOffSwitchUtils';
import { evaluateAllCells } from '../../../common/gameOfLifeUtils';

jest.mock('../../common/gameOfLifeUtils');
const mockedEvaluator = evaluateAllCells as jest.Mock<unknown>;

describe('ticker()', ()=>{
	describe('WHEN: Passed a gridStore object and updateGrid function,', ()=>{
		it('THEN: evaluateAllCells is invoked with those two arguments.', ()=>{
			mockedEvaluator.mockImplementation(jest.fn());
			const updateGrid = jest.fn();
			const gridStore = [
				[1, 1],
				[1, 1],
			];

			ticker(gridStore, updateGrid);

			expect(mockedEvaluator).toHaveBeenCalledWith(gridStore, updateGrid);
		});
	});
});