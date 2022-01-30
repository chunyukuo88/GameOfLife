<script lang='ts'>
	import { onMount } from 'svelte';
	import { fromEvent } from 'rxjs';

	let searchBox;
	let results = '';
	onMount(()=>{
		const keyPresses$ = fromEvent(searchBox, 'input');
		keyPresses$.subscribe(keypress => updateSearchQuery(keypress));
	});

	const updateSearchQuery = (keypress) => {
		(keypress.data === null)
			? results = results.slice(0, results.length - 1)
			: results += keypress.data;
	};

</script>

<div class="input-container">
	<input bind:this={searchBox} type='text'/>
	<button>🔎</button>
</div>
<div>Results:</div>
<p>{results}</p>


<style>
	.input-container {
		align-items: start;
		display: flex;
		width: 230px;
	}
</style>