<script lang='ts'>
	import { getContext } from 'svelte';

	const { gridLinesStore, toggleGridLines } = getContext('gridContext');
	const clickHandler = () => ($gridLinesStore === true)
		? toggleGridLines(false)
		: toggleGridLines(true);
</script>

<button class='grid-lines-button' on:click={clickHandler}>
	<h1>
		Lines
	</h1>
</button>