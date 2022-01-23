import {
	createGridStore,
	createIsTickingStore,
	createSpeedStore
} from './stores';

const gridStore = createGridStore();
const isTickingStore = createIsTickingStore();
const speedStore = createSpeedStore();

export const createGridContext = {
	gridStore,
	updateGrid: (newGrid: number[][]) => gridStore.set(newGrid),
};

export const createTickingContext = {
	isTickingStore,
	stopTicking: () => isTickingStore.set(false),
	startTicking: () => isTickingStore.set(true),
};

/******************* **/
// let tickerId;
// function clickHandler(){
// 	(isTickingStore === true) ? stopTicking() : startTicking();
// 	const interval =  speedStore * 2;
// 	if (isTickingStore) tickerId = setInterval(() => ticker(gridStore, updateGrid), interval);
// 	else clearInterval(tickerId);
// }






/******************* **/

export const createSpeedContext = {
	speedStore,
	updateSpeed: (newSpeed: number) => speedStore.set(newSpeed),
};
