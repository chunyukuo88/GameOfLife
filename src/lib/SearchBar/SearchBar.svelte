<script lang='ts'>
	import { onMount } from 'svelte';
	import { fromEvent } from 'rxjs';

	const url = 'https://jsonplaceholder.typicode.com/users/1/todos';
	let searchBox;
	let results = ''
	onMount(()=>{
		fromEvent(searchBox, 'input')
			.forEach(keypress => {
				results += keypress.data;
			});
	});
</script>

<input bind:this={searchBox} type='text'/><button>🔎</button>
<div>Results:</div>
<p>{results}</p>
<style>

</style>