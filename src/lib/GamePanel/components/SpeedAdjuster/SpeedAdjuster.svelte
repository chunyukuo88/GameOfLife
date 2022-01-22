<script lang="ts">
	import { getReactiveCssClass } from './SpeedAdjusterUtils';
	import { getContext } from 'svelte';

	let value;
	const { updateSpeed } = getContext('speedContext');
	const { stopTicking } = getContext('tickingContext');
	const sliderHandler = () => {
		stopTicking();
		updateSpeed(value);
	};

	$: reactiveStyling = getReactiveCssClass(value);
</script>


<div class='range-slider__wrapper'>
	<input
		on:change={sliderHandler}
		bind:value
		type="range"
	>
</div>


<style>
	div {
		width: 100%;
	}

	.range-slider__wrapper {
		width: 27.8rem;
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
