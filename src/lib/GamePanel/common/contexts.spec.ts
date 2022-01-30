import { createGridContext } from './contexts';

it('', ()=>{
	expect(true).toBeTruthy();
})

describe('contexts.ts', ()=>{
	describe('createGridContext() function', ()=>{
		describe('GIVEN: It is passed a stores object as an argument and invoked ,', ()=>{
			const stores = {
				gridStore: { set: jest.fn() },
				gridLinesStore: { set: jest.fn() },
				isTickingStore: { set: jest.fn() },
				speedStore: { set: jest.fn() },
			};
			describe('WHEN: The stopTicking method of the resulting object is invoked.', ()=>{
				it('THEN: The isTickingStore is set to `false`.', ()=>{
					const context = createGridContext(stores);

					context.stopTicking();

					expect(context.isTickingStore.set).toHaveBeenCalledWith(false);
				});
			});
			describe('WHEN: The startTicking method of the resulting object is invoked.', ()=>{
				it('THEN: The isTickingStore is set to `true`.', ()=>{
					const context = createGridContext(stores);

					context.startTicking();

					expect(context.isTickingStore.set).toHaveBeenCalledWith(true);
				});
			});
			describe('WHEN: The updateSpeed method of the resulting object is invoked with a newSpeed.', ()=>{
				it('THEN: The speedStore is set to the new speed.', ()=>{
					const context = createGridContext(stores);

					context.updateSpeed(5);

					expect(context.speedStore.set).toHaveBeenCalledWith(5);
				});
			});
		});
	});
});
