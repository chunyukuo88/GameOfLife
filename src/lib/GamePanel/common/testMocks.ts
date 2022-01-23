export const mockedEntireContext = {
	gridStore: {
		subscribe: () => function unsubscribe(){
			return null;
		},
	},
	isTickingStore: {
		subscribe: () => function unsubscribe(){
			return null;
		},
	},
	speedStore: {
		subscribe: () => function unsubscribe(){
			return null;
		},
	},
	updateGrid: jest.fn(),
	stopTicking: jest.fn(),
	startTicking: jest.fn(),
	updateSpeed: jest.fn(),
};