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
	{label}
</button>

<style>
	button {
      font-size: 3em;
		width: 100%;
	}
</style>


