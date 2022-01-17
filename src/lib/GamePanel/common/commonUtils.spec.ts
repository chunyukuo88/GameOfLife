import { createGridContext } from './commonUtils';
import { gridStore } from './stores';

describe('commonUtils.ts', ()=>{
	describe('createGridContext()', () => {
		describe('WHEN: This function is invoked, ', () => {
			describe('AND: The method of the returned object is invoked with a new grid, ', () => {
				it('THEN: It updates the store with that new grid.', ()=>{
					const spy = jest.spyOn(gridStore, "set");
					const gridContext = createGridContext();
					const mockGrid = [
						[-1,-1,-1],
						[-1,-1,-1],
						[-1,-1,-1]
					];

					gridContext.updateGrid(mockGrid);

					expect(spy).toHaveBeenCalledWith(mockGrid);
				});
			});
		});
	});
});