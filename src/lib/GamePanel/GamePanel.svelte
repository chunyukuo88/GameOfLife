<script lang='ts'>
	import { createStores	} from './common/stores';
	import { createGridContext } from './common/contexts';
	import { setContext } from 'svelte';
	import { patternLabels } from './common/patterns';
	import Grid from './components/Grid/Grid.svelte';
	import GridLinesButton from './components/GridLinesButton/GridLinesButton.svelte';
	import ResetButton from './components/ResetButton/ResetButton.svelte';
	import StepButton from './components/StepButton/StepButton.svelte';
	import OnOffSwitch from './components/OnOffSwitch/OnOffSwitch.svelte';
	import SpeedAdjuster from './components/SpeedAdjuster/SpeedAdjuster.svelte';
	import PatternsButton from './components/PatternsButton/PatternsButton.svelte';
	import RandomizeButton from './components/RandomizeButton/RandomizeButton.svelte';
	const { BUTTERFLY, GLIDERS, REFLECTOR, MAGIC_BOX } = patternLabels;

	const gridContext = createGridContext(createStores());
	setContext('gridContext', gridContext);
</script>

<section class='gol-page-container'>
	<div class='grid-and-controls'>
		<div class='grid'>
			<Grid />
		</div>
		<div class='controls'>
			<StepButton />
			<ResetButton />
			<OnOffSwitch />
			<RandomizeButton />
			<GridLinesButton />
		</div>
			<SpeedAdjuster/>
	</div>
	<div class='patterns-container'>
		<PatternsButton label={BUTTERFLY}/>
		<PatternsButton label={GLIDERS}/>
		<PatternsButton label={MAGIC_BOX}/>
		<PatternsButton label={REFLECTOR}/>
	</div>
</section>

<style>
	.grid-and-controls {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.controls {
		display: flex;
		justify-content: center;
		width: 100%;
	}
  .grid {
		display: flex;
		justify-content: center;
  }
	.patterns-container {
		display: flex;
		flex-direction: column;
	}
	.gol-page-container {
      display: flex;
			justify-content: center;
	}
</style>