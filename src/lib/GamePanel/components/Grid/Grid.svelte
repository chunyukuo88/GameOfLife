<script lang='ts'>
	import { getContext } from 'svelte';
	import { cellClickHandler } from '../../common/gameOfLifeUtils';

	const { gridStore, updateGrid } = getContext('gridContext');
</script>

<table>
	{#each $gridStore as row, i}
		<tr>
			{#each row as val, j}
				{#if (val === 1)}
					<td on:click={()=>cellClickHandler($gridStore, updateGrid, i, j)} class='living'>{val}</td>
				{:else}
					<td on:click={()=>cellClickHandler($gridStore, updateGrid, i, j)}>{val}</td>
				{/if}
			{/each}
		</tr>
	{/each}
</table>

<style>
	.living {
			background: yellow;
	}
  td {
      background: gray;
      user-select: none;
  }
</style>
