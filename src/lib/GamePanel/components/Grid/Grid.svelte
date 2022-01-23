<script lang='ts'>
	import Cell from '../../components/Cell/Cell.svelte';
	import { getContext } from 'svelte';

	const { gridStore } = getContext('gridContext');
</script>

<table>
	{#each $gridStore as row, i}
		<tr>
			{#each row as value, j}
				<Cell {row} {value} {i} {j}/>
			{/each}
		</tr>
	{/each}
</table>

