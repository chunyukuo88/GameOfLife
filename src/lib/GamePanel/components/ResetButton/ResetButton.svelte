<script lang='ts'>
	import { resetGrid } from '../../common/gameOfLifeUtils';
	import { getContext } from 'svelte';

	const { updateGrid } = getContext('gridContext');
	const resetHandler = () => resetGrid(updateGrid);
</script>

<button class='reset-button' on:click={resetHandler}>
	<h1>
		Reset
	</h1>
</button>