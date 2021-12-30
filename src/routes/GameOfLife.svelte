<script lang='ts'>
	import { cellClickHandler } from '$lib/gameOfLifeUtils';
	import { setContext } from 'svelte';

	let grid = [
		[ -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1 ],
	];
	const gridContext = {
		grid,
		updateGrid: (newGrid) => grid = newGrid
	};
	setContext('gridContext', gridContext);
</script>

<table>
	{#each grid as row, i}
		<tr>
			{#each row as val, j}
				<td on:click={()=>cellClickHandler(gridContext, i, j)}>
					{val}
				</td>
			{/each}
		</tr>
	{/each}
</table>

<style>
	td {
		background: gray;
		font-size: 5rem;
	}
</style>