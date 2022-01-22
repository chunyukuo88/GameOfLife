<script lang='ts'>
	import * as Contexts from './common/commonUtils';
	import { setContext } from 'svelte';
	import Grid from './components/Grid/Grid.svelte';
	import ResetButton from './components/ResetButton/ResetButton.svelte';
	import StepButton from './components/StepButton/StepButton.svelte';
	import OnSwitch from './components/OnOffSwitch/OnOffSwitch.svelte';
	import SpeedAdjuster from './components/SpeedAdjuster/SpeedAdjuster.svelte';

	const gridContext = Contexts.createGridContext();
	const tickingContext = Contexts.createTickingContext();
	const speedContext = Contexts.createSpeedContext();
	setContext('gridContext', gridContext);
	setContext('tickingContext', tickingContext);
	setContext('speedContext', speedContext);
</script>

<Grid />
<StepButton />
<ResetButton />
<OnSwitch />
<SpeedAdjuster/>