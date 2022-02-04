<script lang='ts'>
	import { createStores	} from './common/stores';
	import { createGridContext } from './common/contexts';
	import { setContext } from 'svelte';
	import { patternLabels } from './common/patterns';
	import Grid from './components/Grid/Grid.svelte';
	import GridLinesButton from './components/GridLinesButton/GridLinesButton.svelte';
	import ResetButton from './components/ResetButton/ResetButton.svelte';
	import StepButton from './components/StepButton/StepButton.svelte';
	import OnSwitch from './components/OnOffSwitch/OnOffSwitch.svelte';
	import SpeedAdjuster from './components/SpeedAdjuster/SpeedAdjuster.svelte';
	import PatternsButton from './components/PatternsButton/PatternsButton.svelte';
	import RandomizeButton from './components/RandomizeButton/RandomizeButton.svelte';
	const { BUTTERFLY, GLIDERS, REFLECTOR, MAGIC_BOX } = patternLabels;

	const gridContext = createGridContext(createStores());
	setContext('gridContext', gridContext);
</script>

<Grid />
<StepButton />
<ResetButton />
<RandomizeButton />
<GridLinesButton />
<OnSwitch />
<SpeedAdjuster/>
<PatternsButton label={BUTTERFLY}/>
<PatternsButton label={GLIDERS}/>
<PatternsButton label={MAGIC_BOX}/>
<PatternsButton label={REFLECTOR}/>
