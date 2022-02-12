<script lang='ts'>
	import { getContext } from 'svelte';
	import { cellClickHandler } from './CellUtils';

	const { gridStore, updateGrid, gridLinesStore } = getContext('gridContext');
	export let value: 1 | -1;
	export let i: number;
	export let j: number;

	const handler = () => cellClickHandler($gridStore, updateGrid, i, j);
</script>

<td
	on:click={handler}
	class:living={value === 1}
	class:grid-lines={$gridLinesStore === true}
	role='button'
>
	{value}
</td>


<style>
	.grid-lines {
		border: 1px solid #000000FF;
	}
	.living {
		background: #FFFF00FF;
		color: #FFFF00FF;
	}
	td {
		background: #808080FF;
		color: #808080FF;
		font-size: 0.4rem;
		user-select: none;
	}
</style>
