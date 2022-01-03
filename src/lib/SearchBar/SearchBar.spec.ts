import SearchBar from './SearchBar.svelte';
import { render, screen, fireEvent } from '@testing-library/svelte';

const todos = 'https://jsonplaceholder.typicode.com/users/1/todos';

describe('SearchBar.svelte', ()=>{
	describe('Layout', ()=>{
		it('The search bar is displayed', ()=>{
			render(SearchBar);
			const input = screen.getByRole('textbox');
			const button = screen.getByRole('button');

			expect(input).toBeInTheDocument();
			expect(button).toBeInTheDocument();
		});
	});
	describe('Interaction', ()=>{
		describe('WHEN: The user types "a",', ()=>{
			it(`THEN: The matching todos from ${todos} will be displayed below it.`, async ()=>{
				render(SearchBar);
				const input = screen.getByRole('textbox');
				const results = document.querySelector('p');
				const expectedResult = 'ab voluptatum amet voluptas, accusamus eos facilis sint et aut voluptatem';

				await fireEvent.input(input, 'a');

				expect(results.innerText).toEqual(expectedResult);
			});
		});
	});
});
