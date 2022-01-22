export const getReactiveCssClass = (value: number): string => {
	if (value < 10) return 'below10';
	if (value < 20) return 'below20';
	if (value < 30) return 'below30';
	if (value < 40) return 'below40';
	if (value < 50) return 'below50';
	if (value < 60) return 'below60';
	if (value < 70) return 'below70';
	if (value < 80) return 'below80';
	if (value < 90) return 'below90';
	return 'above90';
};

// export const sliderHandler = (event, updateTicking, updateSpeed): void => {
// 	updateTicking(false);
// 	updateSpeed(event.target.value);
// };