<script lang='ts'>
	import { getReactiveCssClass } from './SpeedAdjusterUtils';
	import { getContext } from 'svelte';

	let value = 20;
	const { updateSpeed } = getContext('gridContext');
	const sliderHandler = () => updateSpeed(value)
	$: reactiveStyling = getReactiveCssClass(value);
</script>

<div class='{reactiveStyling} range-slider__wrapper'>
	<span>快</span>
	<input
		on:input={sliderHandler}
		bind:value
		type="range"
	>
	<span>慢</span>
</div>


<style>
	.range-slider__wrapper {
		align-items: center;
		display: flex;
		justify-content: center;
		height: 100%;
		width: 100%;
	}

	span {
		font-size: 3em;
	}

	.below10 {
		background-color: hsl(0, 100%, 50%);
		transition: 1s;
	}
	.below20 {
		background-color: hsl(4, 80%, 50%);
		transition: 1s;
	}
	.below30 {
		background-color: hsl(0, 60%, 50%);
		transition: 1s;
	}
	.below40 {
		background-color: hsl(0, 40%, 50%);
		transition: 1s;
	}
	.below50 {
		background-color: hsl(0, 20%, 50%);
		transition: 1s;
	}
	.below60 {
		background-color: hsl(0, 27%, 43%);
		transition: 1s;
	}
	.below70 {
		background-color: hsl(0, 27%, 42%);
		transition: 1s;
	}
	.below80 {
		background-color: hsl(0, 32%, 30%);
		transition: 1s;
	}
	.below90 {
		background-color: hsl(0, 27%, 17%);
		transition: 1s;
	}
	.above90 {
		background-color: hsl(0, 29%, 12%);
		transition: 1s;
	}
</style>
