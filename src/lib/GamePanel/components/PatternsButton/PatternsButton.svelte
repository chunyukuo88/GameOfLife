<script lang='ts'>
	import { updateWithPattern } from '../../common/gameOfLifeUtils';
	import { getContext } from 'svelte';

	const { updateGrid } = getContext('gridContext');
	export let label: string;
</script>

<button on:click={()=>updateWithPattern(updateGrid, label)}>
	<h3>
		{label}
	</h3>
</button>

<style>
	button {
		width: 12.25rem;
	}
</style>