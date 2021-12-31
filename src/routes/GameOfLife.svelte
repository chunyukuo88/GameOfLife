<script lang='ts'>
	import {
		cellClickHandler,
		evaluateAllCells,
		resetGrid,
	} from '$lib/gameOfLifeUtils';
	import { setContext } from 'svelte';

	const startingGrid = [
		[ -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1 ],
	];
	export let exposedGrid = JSON.parse(JSON.stringify(startingGrid));
	const gridContext = {
		grid: exposedGrid,
		updateGrid: (newGrid) => {
			exposedGrid = newGrid;
		}
	};
	setContext('gridContext', gridContext);
	const tickHandler = () => evaluateAllCells(gridContext, exposedGrid);
	const resetHandler = () => resetGrid(gridContext);
</script>

<table>
	{#each exposedGrid as row, i}
		<tr>
			{#each row as val, j}
				{#if (val === 1)}
					<td on:click={()=>cellClickHandler(gridContext, i, j)} class='living'>{val}</td>
				{:else}
					<td on:click={()=>cellClickHandler(gridContext, i, j)}>{val}</td>
				{/if}
			{/each}
		</tr>
	{/each}
</table>
<button on:click={tickHandler}>
	<h1>Tick</h1>
</button>
<button on:click={resetHandler}>
	<h1>Reset</h1>
</button>

<style>
	.living {
		background: yellow;
	}
	td {
		background: gray;
		font-size: 5rem;
	}
</style>