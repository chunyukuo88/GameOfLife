<script lang='ts'>
	import { resetGrid } from '$lib/GamePanel/common/gameOfLifeUtils';
	import { getContext } from 'svelte';

	const gridContext = getContext('gridContext');
	const resetHandler = () => resetGrid(gridContext.updateGrid);
</script>

<button on:click={resetHandler}>
	<h1>Reset</h1>
</button>