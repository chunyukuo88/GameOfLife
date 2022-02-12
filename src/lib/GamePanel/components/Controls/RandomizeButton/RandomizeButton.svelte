<script lang="ts">
	import { resetGrid, randomGrid } from '../../../common/gameOfLifeUtils';
	import { getContext } from 'svelte';

	const { updateGrid } = getContext('gridContext');
	const resetHandler = () => resetGrid(updateGrid, randomGrid);
</script>

<button on:click={resetHandler}>
	隨機
</button>

<style>
  button {
		font-size: 3em;
		width: 100%;
  }
</style>