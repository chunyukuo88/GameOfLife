<script lang='ts'>
	import { createGridStore, createIsTickingStore, createSpeedStore } from './common/stores';
	import { createGridContext, createTickingContext, createSpeedContext } from './common/contexts';
	import { setContext } from 'svelte';
	import { patternLabels } from './common/patterns';
	import Grid from './components/Grid/Grid.svelte';
	import ResetButton from './components/ResetButton/ResetButton.svelte';
	import StepButton from './components/StepButton/StepButton.svelte';
	import OnSwitch from './components/OnOffSwitch/OnOffSwitch.svelte';
	import SpeedAdjuster from './components/SpeedAdjuster/SpeedAdjuster.svelte';
	import PatternsButton from './components/PatternsButton/PatternsButton.svelte';
	const { BUTTERFLY, GLIDERS, REFLECTOR, MAGIC_BOX } = patternLabels;

	const gridContext = createGridContext(createGridStore());
	const tickingContext = createTickingContext(createIsTickingStore());
	const speedContext = createSpeedContext(createSpeedStore());
	setContext('gridContext', gridContext);
	setContext('tickingContext', tickingContext);
	setContext('speedContext', speedContext);
</script>

<Grid />
<StepButton />
<ResetButton />
<OnSwitch />
<SpeedAdjuster/>
<PatternsButton label={BUTTERFLY}/>
<PatternsButton label={GLIDERS}/>
<PatternsButton label={MAGIC_BOX}/>
<PatternsButton label={REFLECTOR}/>
