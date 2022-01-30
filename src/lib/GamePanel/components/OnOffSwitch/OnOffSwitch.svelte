<script lang='ts'>
	import { getContext } from 'svelte';
	import { ticker } from './OnOffSwitchUtils';

	const {
		gridStore,
		updateGrid,
		isTickingStore,
		stopTicking,
		startTicking,
		speedStore,
		updateSpeed,
	} = getContext('gridContext');

	let tickerId;
	function clickHandler(){
		($isTickingStore === true) ? stopTicking() : startTicking();
		const interval =  $speedStore * 2;
		if ($isTickingStore) tickerId = setInterval(() => ticker($gridStore, updateGrid), interval);
		else clearInterval(tickerId);
	}

	$: label = ($isTickingStore === true) ? '■': '▶';
	$: tickingStatus = ($isTickingStore === true) ? 'ticking-on' : 'ticking-off';
</script>

<button on:click={clickHandler} class='{tickingStatus}'>
	<h3 >
		{label}
	</h3>
</button>

<style>
	button {
		width: 12.25rem;
	}
</style>


