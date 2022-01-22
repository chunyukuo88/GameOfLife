<script lang="ts">
	import { evaluateAllCells } from '../../common/gameOfLifeUtils';
	import { getContext } from 'svelte';

	const { gridStore, updateGrid } = getContext('gridContext');
	const { isTickingStore, stopTicking, startTicking } = getContext('tickingContext');
	const { speedStore, updateSpeed } = getContext('speedContext');

	let tickerId;
	const tick = () => evaluateAllCells($gridStore, updateGrid);

	function clickHandler(){
		($isTickingStore === true) ? stopTicking() : startTicking();
		if ($isTickingStore) tickerId = setInterval(tick, $speedStore * 2);
		else clearInterval(tickerId);
	}
</script>

<button on:click={clickHandler}>
	<h1>
		On/Off
	</h1>
</button>


