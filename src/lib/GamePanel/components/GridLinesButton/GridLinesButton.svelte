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
		/*font-size: 0.8rem;*/
      width: 100%;
	}
</style>