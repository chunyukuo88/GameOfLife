<script lang='ts'>
	import { resetGrid } from '../../../common/gameOfLifeUtils';
	import { getContext } from 'svelte';

	const { updateGrid } = getContext('gridContext');
	const resetHandler = () => resetGrid(updateGrid);
</script>

<button class='reset-button' on:click={resetHandler}>
	重置
</button>

<style>
	button {
		width: 100%;
		font-size: 3em;
	}
</style>