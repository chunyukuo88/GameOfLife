<script lang='ts'>
	import { getContext } from 'svelte';

	const { gridLinesStore, toggleGridLines } = getContext('gridContext');
	const clickHandler = () => ($gridLinesStore === true)
		? toggleGridLines(false)
		: toggleGridLines(true);
</script>

<button class='grid-lines-button' on:click={clickHandler}>
	格子
</button>

<style>
	button {
		font-size: 3em;
		width: 100%;
	}
</style>