<script lang='ts'>
	import { updateWithPattern } from '../../common/gameOfLifeUtils';
	import { getContext } from 'svelte';

	const { updateGrid } = getContext('gridContext');
	export let label: string;
	const clickHandler = () => updateWithPattern(updateGrid, label);
</script>

<button on:click={clickHandler}>
	{label}
</button>

<style>
	button {
			font-size: 3em;
		width: 6rem;
		height: 100%;
	}
</style>