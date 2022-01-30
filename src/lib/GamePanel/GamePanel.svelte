<script lang='ts'>
	import {
		createGridStore,
		createGridLinesStore,
		createSpeedStore,
		createIsTickingStore,
	} from './common/stores';
	import {
		createGridContext,
		createGridLinesContext,
		createSpeedContext,
		createTickingContext,
	} from './common/contexts';
	import { setContext } from 'svelte';
	import { patternLabels } from './common/patterns';
	import Grid from './components/Grid/Grid.svelte';
	import GridLinesButton from './components/GridLinesButton/GridLinesButton.svelte';
	import ResetButton from './components/ResetButton/ResetButton.svelte';
	import StepButton from './components/StepButton/StepButton.svelte';
	import OnSwitch from './components/OnOffSwitch/OnOffSwitch.svelte';
	import SpeedAdjuster from './components/SpeedAdjuster/SpeedAdjuster.svelte';
	import PatternsButton from './components/PatternsButton/PatternsButton.svelte';
	const { BUTTERFLY, GLIDERS, REFLECTOR, MAGIC_BOX } = patternLabels;

	const gridContext = createGridContext(createGridStore());
	const gridLinesContext = createGridLinesContext(createGridLinesStore());
	const speedContext = createSpeedContext(createSpeedStore());
	const tickingContext = createTickingContext(createIsTickingStore());
	setContext('gridContext', gridContext);
	setContext('gridLinesContext', gridLinesContext);
	setContext('speedContext', speedContext);
	setContext('tickingContext', tickingContext);
</script>

<Grid />
<StepButton />
<ResetButton />
<GridLinesButton />
<OnSwitch />
<SpeedAdjuster/>
<PatternsButton label={BUTTERFLY}/>
<PatternsButton label={GLIDERS}/>
<PatternsButton label={MAGIC_BOX}/>
<PatternsButton label={REFLECTOR}/>
