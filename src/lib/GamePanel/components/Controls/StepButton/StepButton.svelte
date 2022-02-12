<script lang='ts'>
	import { evaluateAllCells } from '../../../common/gameOfLifeUtils';
	import { getContext } from 'svelte';

	const { gridStore, updateGrid } = getContext('gridContext');
	const tickHandler = () => evaluateAllCells($gridStore, updateGrid);
</script>

<button on:click={tickHandler}>
	一步
</button>

<style>
	button {
		width: 100%;
		font-size: 3em;
	}
</style>