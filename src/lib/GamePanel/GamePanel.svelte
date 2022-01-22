<script lang='ts'>
	import * as Contexts from './common/commonUtils';
	import { setContext } from 'svelte';
	import Grid from './components/Grid/Grid.svelte';
	import ResetButton from './components/ResetButton/ResetButton.svelte';
	import StepButton from './components/StepButton/StepButton.svelte';
	import OnSwitch from './components/OnOffSwitch/OnOffSwitch.svelte';
	import SpeedAdjuster from '$lib/GamePanel/components/SpeedAdjuster/SpeedAdjuster.svelte';

	const gridContext = Contexts.createGridContext();
	setContext('gridContext', gridContext);
</script>

<Grid />
<StepButton />
<ResetButton />
<OnSwitch />
<SpeedAdjuster/>