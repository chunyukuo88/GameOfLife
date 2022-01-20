<script lang='ts'>
	import { createGridContext } from './common/commonUtils';
	import { setContext } from 'svelte';
	import Grid from './components/Grid/Grid.svelte';
	import ResetButton from './components/ResetButton/ResetButton.svelte';
	import StepButton from './components/StepButton/StepButton.svelte';

	const gridContext = createGridContext();
	setContext('gridContext', gridContext);
</script>

<Grid />
<StepButton />
<ResetButton />