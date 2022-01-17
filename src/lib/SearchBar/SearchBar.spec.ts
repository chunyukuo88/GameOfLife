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
});
