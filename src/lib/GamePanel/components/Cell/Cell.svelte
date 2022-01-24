<script lang='ts'>
	import { getContext } from 'svelte';
	import { cellClickHandler } from './CellUtils';

	const { gridStore, updateGrid } = getContext('gridContext');
	export let value: 1 | -1;
	export let i: number;
	export let j: number;

	const handler = () => cellClickHandler($gridStore, updateGrid, i, j);
</script>

{#if (value === 1)}
	<td on:click={handler} class='living' role='button'>
		{value}
	</td>
{:else}
	<td on:click={handler} class='dead' role='button'>
		{value}
	</td>
{/if}

<style>
	.dead {
		background: gray;
		color: gray;
	}
	.living {
		background: yellow;
		color: yellow;
	}
	td {
		max-height: 0.6rem;
		user-select: none;
		max-width: 0.6rem;
	}
</style>
