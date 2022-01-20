<script lang='ts'>
	import { onMount } from 'svelte';
	import { fromEvent } from 'rxjs';

	let searchBox;
	let results = ''
	onMount(()=>{
		fromEvent(searchBox, 'input')
			.forEach(keypress => updateSearchQuery(keypress));
	});

	const updateSearchQuery = (keypress) => {
		(keypress.data === null)
			? results = results.slice(0, results.length - 1)
			: results += keypress.data;
	};
</script>

<input bind:this={searchBox} type='text'/><button>🔎</button>
<div>Results:</div>
<p>{results}</p>
<style>

</style>