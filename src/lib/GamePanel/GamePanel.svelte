<script lang='ts'>
	import { evaluateAllCells, resetGrid } from '$lib/GamePanel/common/gameOfLifeUtils';
	import { createGridContext } from '$lib/GamePanel/common/commonUtils';
	import { setContext } from 'svelte';
	import Grid from '$lib/GamePanel/components/Grid.svelte';

	const gridContext = createGridContext();
	setContext('gridContext', gridContext);

	// const tickHandler = () => evaluateAllCells(gridContext, exposedGrid);
	const tickHandler = () => console.log('tickHandler()');
	// const tickHandler = () => resetGrid(...);
	const resetHandler = () => console.log('resetHandler()');
</script>

<Grid />


<button on:click={tickHandler}>
	<h1>Tick</h1>
</button>
<button on:click={resetHandler}>
	<h1>Reset</h1>
</button>
