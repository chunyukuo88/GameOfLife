<script lang='ts'>
	const grid = [
		[ 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0 ],
	];

</script>

<table>
	{#each grid as row}
		<tr>
			{#each row as val}
				<td>
					{val}
				</td>
			{/each}
		</tr>
	{/each}
</table>