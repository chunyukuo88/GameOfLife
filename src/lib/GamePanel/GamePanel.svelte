<script lang='ts'>
	import { createGridContext } from '$lib/GamePanel/common/commonUtils';
	import { setContext } from 'svelte';
	import Grid from '$lib/GamePanel/components/Grid/Grid.svelte';
	import ResetButton from '$lib/GamePanel/components/ResetButton/ResetButton.svelte';
	import StepButton from '$lib/GamePanel/components/StepButton/StepButton.svelte';

	const gridContext = createGridContext();
	setContext('gridContext', gridContext);
</script>

<Grid />
<StepButton />
<ResetButton />