<script lang='ts'>
	import { cellClickHandler, evaluateAllCells } from '$lib/gameOfLifeUtils';
	import { setContext } from 'svelte';

	let exposedGrid = [
		[ -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1 ],
	];
	const gridContext = {
		grid: exposedGrid,
		updateGrid: (newGrid) => exposedGrid = newGrid
	};
	setContext('gridContext', gridContext);
	const tickHandler = () => evaluateAllCells(gridContext, exposedGrid);
</script>

<table>
	{#each exposedGrid as row, i}
		<tr>
			{#each row as val, j}
				<td on:click={()=>cellClickHandler(gridContext, i, j)}>
					{val}
				</td>
			{/each}
		</tr>
	{/each}
</table>
<button on:click={tickHandler}>
	<h1>Tick</h1>
</button>

<style>
	td {
		background: gray;
		font-size: 5rem;
	}
</style>