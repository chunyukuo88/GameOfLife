<script lang='ts'>
	import { gridContext, tickingContext, speedContext } from './common/commonUtils';
	import { setContext } from 'svelte';
	import Grid from './components/Grid/Grid.svelte';
	import ResetButton from './components/ResetButton/ResetButton.svelte';
	import StepButton from './components/StepButton/StepButton.svelte';
	import OnSwitch from './components/OnOffSwitch/OnOffSwitch.svelte';
	import SpeedAdjuster from './components/SpeedAdjuster/SpeedAdjuster.svelte';

	setContext('gridContext', gridContext);
	setContext('tickingContext', tickingContext);
	setContext('speedContext', speedContext);
</script>

<Grid />
<StepButton />
<ResetButton />
<OnSwitch />
<SpeedAdjuster/>