<script lang="ts">
	import { resetGrid, randomGrid } from '../../common/gameOfLifeUtils';
	import { getContext } from 'svelte';

	const { updateGrid } = getContext('gridContext');
	const resetHandler = () => resetGrid(updateGrid, randomGrid);
</script>

<button on:click={resetHandler}>
	<h3>
		隨機
	</h3>
</button>

<style>
  button {
      width: 100%;
  }
</style>