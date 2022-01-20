import GamePanel from './GamePanel.svelte';
import { render, fireEvent } from '@testing-library/svelte';

describe('GIVEN: The grid renders', ()=>{
	afterEach(()=>{
		render(GamePanel);
		const resetButton = document.querySelectorAll('button')[1];
		fireEvent.click(resetButton);
	});
	describe('WHEN: The user clicks a cell', ()=>{
		it('THEN: The cell changes color.', async ()=>{
			render(GamePanel);
			let cell = document.querySelector('td');

			expect(cell).toHaveTextContent('-1');

			await fireEvent.click(cell);
			cell = document.querySelector('td');

			expect(cell).toHaveTextContent('1');
		});
	});
	describe('WHEN: The user clicks a cell and then clicks "reset"', ()=>{
		it('THEN: The cell changes color, then the whole grid is blank.', async ()=>{
			render(GamePanel);
			let cell = document.querySelector('td');
			const resetButton = document.querySelectorAll('button')[1];

			expect(cell).toHaveTextContent('-1');

			await fireEvent.click(cell);
			cell = document.querySelector('td');

			expect(cell).toHaveTextContent('1');

			await fireEvent.click(resetButton);
			cell = document.querySelector('td');

			expect(cell).toHaveTextContent('-1');
		});
	});
	describe('WHEN: The user clicks a cell and then clicks "tick"', ()=>{
		it('THEN: The cell changes color, then the whole grid is blank.', async ()=>{
			render(GamePanel);
			let cell = document.querySelector('td');
			const tickButton = document.querySelectorAll('button')[0];

			expect(cell).toHaveTextContent('-1');

			await fireEvent.click(cell);
			cell = document.querySelector('td');

			expect(cell).toHaveTextContent('1');

			await fireEvent.click(tickButton);
			cell = document.querySelector('td');

			expect(cell).toHaveTextContent('-1');
		});
	});
});
