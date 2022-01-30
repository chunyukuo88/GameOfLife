<script lang='ts'>
	import { getContext } from 'svelte';

	const { gridLinesStore, toggleGridLines } = getContext('gridContext');
	const clickHandler = () => ($gridLinesStore === true)
		? toggleGridLines(false)
		: toggleGridLines(true);
</script>

<button class='grid-lines-button' on:click={clickHandler}>
	<h3>
		格子
	</h3>
</button>

<style>
	button {
		width: 12.25rem;
	}
</style>