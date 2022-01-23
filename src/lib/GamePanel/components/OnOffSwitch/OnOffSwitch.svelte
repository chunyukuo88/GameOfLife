<script lang='ts'>
	import { getContext } from 'svelte';
	import { ticker } from './OnOffSwitchUtils';

	const { gridStore, updateGrid } = getContext('gridContext');
	const { isTickingStore, stopTicking, startTicking } = getContext('tickingContext');
	const { speedStore, updateSpeed } = getContext('speedContext');

	let tickerId;

	function clickHandler(){
		($isTickingStore === true) ? stopTicking() : startTicking();
		const interval =  $speedStore * 2;
		if ($isTickingStore) tickerId = setInterval(() => ticker($gridStore, updateGrid), interval);
		else clearInterval(tickerId);
	}

</script>

<button on:click={clickHandler}>
	<h1>
		On/Off
	</h1>
</button>


