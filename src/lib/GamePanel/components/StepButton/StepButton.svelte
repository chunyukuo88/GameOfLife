<script lang="ts">
	import { evaluateAllCells } from '$lib/GamePanel/common/gameOfLifeUtils';
	import { getContext } from 'svelte';

	const gridContext = getContext('gridContext');
	const tickHandler = () => evaluateAllCells(gridContext);
</script>

<button on:click={tickHandler}>
	<h1>Step</h1>
</button>