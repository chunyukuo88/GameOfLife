import OnOffSwitch from "./OnOffSwitch.svelte";
import { fireEvent, render, screen } from '@testing-library/svelte';
import { getContext } from 'svelte';
import "@testing-library/jest-dom";
import { gridStore } from '../../common/stores;

gridStore.set({});
jest.mock('svelte', ()=>{
  const originalModule = jest.requireActual('svelte');
  return {
    __esModule: true,
    ...originalModule,
    getContext: jest.fn(() => ({
      gridStore: {
        subscribe: jest.fn(),
        unsubscribe: jest.fn()
      },
      updateGrid: jest.fn()
    })),
  };
});

const mockedGetContext = getContext as jest.Mock<unknown>;

describe("OnSwitch.svelte", () => {
  describe("Interaction", () => {
    let button;
    beforeEach(()=>{
      const { getByText } = render(OnOffSwitch);
      button = getByText('On/Off');
    });
    describe("WHEN: The user clicks the button once", () => {
      it("THEN: The stream begins", () => {
        mockedGetContext.mockImplementation(jest.fn());
        const spy = jest.spyOn(window, 'setInterval');

        fireEvent.click(button);

        expect(spy).toBeCalledTimes(1);
      });
    });
    describe("WHEN: The user clicks the button twice", () => {
      it("THEN: The stream begins and then ends", () => {
        render(OnOffSwitch);

        //
      });
    });
  });
});
