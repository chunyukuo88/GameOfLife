import GamePanel from './GamePanel.svelte';
import { render, fireEvent, screen } from '@testing-library/svelte';
import { updateWithPattern } from './common/gameOfLifeUtils';

jest.mock('./common/gameOfLifeUtils', ()=>{
	const originalModule = jest.requireActual('./common/gameOfLifeUtils');
	return {
		__esModule: true,
		...originalModule,
		updateWithPattern: jest.fn()
	};
});

describe('GIVEN: The grid renders', ()=>{
	afterEach(()=>{
		render(GamePanel);
		const resetButton = document.querySelectorAll('button')[1];
		fireEvent.click(resetButton);
	});
	describe('WHEN: The user clicks a cell', ()=>{
		it('THEN: The cell changes color.', ()=>{
			render(GamePanel);
			let cell = document.querySelector('td');

			expect(cell).toHaveTextContent('-1');

			fireEvent.click(cell);
			cell = document.querySelector('td');

			expect(cell).toHaveTextContent('1');
		});
	});
	describe('WHEN: The user clicks a cell and then clicks "reset"', ()=>{
		it('THEN: The cell changes color, then the whole grid is blank.', ()=>{
			render(GamePanel);
			let cell = document.querySelector('td');
			const resetButton = document.querySelectorAll('button')[1];

			expect(cell).toHaveTextContent('-1');

			fireEvent.click(cell);
			cell = document.querySelector('td');

			expect(cell).toHaveTextContent('1');

			fireEvent.click(resetButton);
			cell = document.querySelector('td');

			expect(cell).toHaveTextContent('-1');
		});
	});
	describe('WHEN: The user clicks a cell and then clicks "step"', ()=>{
		it('THEN: The cell changes color, then the whole grid is blank.', ()=>{
			render(GamePanel);
			let cell = document.querySelector('td');
			const tickButton = document.querySelectorAll('button')[0];

			expect(cell).toHaveTextContent('-1');

			fireEvent.click(cell);
			cell = document.querySelector('td');

			expect(cell).toHaveTextContent('1');

			fireEvent.click(tickButton);
			cell = document.querySelector('td');

			expect(cell).toHaveTextContent('-1');
		});
	});
	describe('WHEN: The user clicks a cell and then clicks "on/off"', ()=>{
		it('THEN: The cell changes color, then the whole grid is blank.', async ()=>{
			render(GamePanel);
			let cell = document.querySelector('td');
			const onOffButton = document.querySelectorAll('button')[2];

			expect(cell).toHaveTextContent('-1');

			await fireEvent.click(cell);
			cell = document.querySelector('td');

			expect(cell).toHaveTextContent('1');

			await fireEvent.click(onOffButton);
			cell = document.querySelector('td'),

			setTimeout(
				() => expect(cell).toHaveTextContent('-1'),
				100
			)
		});
	});
	describe('WHEN: The user clicks the gliders button, ', ()=>{
		it('THEN: Gliders are rendered.', ()=>{
			jest.clearAllMocks();
			const mockUpdateGrid = expect.any(Function);
			const label = 'gliders';
			render(GamePanel);

			const glidersButton = screen.getAllByText(label)[0];

			expect(glidersButton).toBeInTheDocument();
			fireEvent.click(glidersButton);

			expect(updateWithPattern).toHaveBeenCalledWith(mockUpdateGrid, label);
		});
	});
});
