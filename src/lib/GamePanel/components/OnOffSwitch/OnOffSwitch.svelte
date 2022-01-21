<script lang="ts">
	import { evaluateAllCells } from '../../common/gameOfLifeUtils';
	import { getContext } from 'svelte';

	const { gridStore, updateGrid } = getContext('gridContext');

	let isTicking = false;
	let tickerId;
	const tick = () => evaluateAllCells($gridStore, updateGrid);

	function clickHandler(){
		isTicking = !isTicking;
		if (isTicking) tickerId = setInterval(tick, 100);
		else clearInterval(tickerId);
	}
</script>

<button on:click={clickHandler}>
	<h1>
		On/Off
	</h1>
</button>


