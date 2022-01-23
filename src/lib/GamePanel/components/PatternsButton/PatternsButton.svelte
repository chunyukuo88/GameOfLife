<script lang="ts">
	import { updateWithPattern } from '../../common/gameOfLifeUtils';
	import { getContext } from 'svelte';

	const { updateGrid } = getContext('gridContext');
	export let label: string;
</script>

<button on:click={()=>updateWithPattern(updateGrid, label)}>
	<h1>
		{label}
	</h1>
</button>