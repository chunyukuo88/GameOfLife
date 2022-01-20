<script lang="ts">
	import { evaluateAllCells } from '$lib/GamePanel/common/gameOfLifeUtils';
	import { getContext } from 'svelte';

	const { gridStore, updateGrid } = getContext('gridContext');
	const tickHandler = () => evaluateAllCells($gridStore, updateGrid);
</script>

<button on:click={tickHandler}>
	<h1>Step</h1>
</button>