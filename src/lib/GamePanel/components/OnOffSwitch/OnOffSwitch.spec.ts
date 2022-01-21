import OnOffSwitch from "./OnOffSwitch.svelte";
import { fireEvent, render } from '@testing-library/svelte';
import "@testing-library/jest-dom";
import { createGridStore } from '../../../GamePanel/common/stores';
import { getContext } from 'svelte'; // Shows as gray in IDE but this is being used.

jest.mock('../../../GamePanel/common/stores');
const mockCreatGridStore = createGridStore as jest.Mock<unknown>;
mockCreatGridStore.mockImplementation(jest.fn());

jest.mock('svelte', ()=>{
  const originalModule = jest.requireActual('svelte');
  return {
    __esModule: true,
    ...originalModule,
    // This method is active despite the gray
    getContext: () => ({
      gridStore: {
        subscribe: () => function unsubscribe(){
          return null;
        },
      },
      updateGrid: jest.fn()
    }),
  };
});


describe("OnSwitch.svelte", () => {
  describe("Interaction", () => {
    let button;
    beforeEach(()=>{
      const { getByText } = render(OnOffSwitch);
      button = getByText('On/Off');
    });
    afterEach(()=>{
      jest.clearAllMocks();
    });
    describe("WHEN: The user clicks the button once", () => {
      it("THEN: The stream begins", () => {
        const spy = jest.spyOn(window, 'setInterval');

        fireEvent.click(button);

        expect(spy).toBeCalledTimes(1);
      });
    });
    describe("WHEN: The user clicks the button twice", () => {
      it("THEN: The stream begins and then ends", () => {
        const setIntervalSpy = jest.spyOn(window, 'setInterval');
        const clearIntervalSpy = jest.spyOn(window, 'clearInterval');

        fireEvent.click(button);
        fireEvent.click(button);

        expect(setIntervalSpy).toBeCalledTimes(1);
        expect(clearIntervalSpy).toBeCalledTimes(1);
      });
    });
  });
});
