import Cell from "./Cell.svelte";
import { fireEvent, render } from '@testing-library/svelte';
import "@testing-library/jest-dom";
import { cellClickHandler } from './CellUtils';
import { getContext } from 'svelte'; // This is active despite the gray color.

jest.mock('svelte', ()=>{
  const originalModule = jest.requireActual('svelte');
  return {
    __esModule: true,
    ...originalModule,
    getContext: () => ({
      gridStore: {
        subscribe: () => function unsubscribe(){
          return null;
        },
      },
      updateGrid: jest.fn(),
    }),
  };
});

jest.mock('./CellUtils');
const mockCellClickHandler = cellClickHandler as jest.Mock<unknown>;


describe("Cell.svelte", () => {
  const props = {
    i: 34,
    j: 12,
    value: -1
  };
  afterEach(()=>{
    jest.clearAllMocks();
  });
  describe("Layout", () => {
    describe("WHEN: Given a val argument of 1", () => {
      it("THEN: It displays a living cell", () => {
        props.value = 1;

        const { container } = render(Cell, props);
        const livingCell = container.querySelector('.living');
        const deadCell = container.querySelector('.dead');

        expect(livingCell).toBeInTheDocument();
        expect(livingCell).toHaveTextContent(props.value.toString());
        expect(deadCell).not.toBeInTheDocument();
      });
    });
    describe("WHEN: Given a val argument of -1", () => {
      it("THEN: It displays a dead cell", () => {
        props.value = -1;

        const { container } = render(Cell, props);
        const deadCell = container.querySelector('.dead');
        const livingCell = container.querySelector('.living');

        expect(deadCell).toBeInTheDocument();
        expect(deadCell).toHaveTextContent(props.value.toString());
        expect(livingCell).not.toBeInTheDocument();
      });
    });
  });
  describe("Interaction", () => {
    describe("WHEN: The user clicks the cell,", () => {
      let expected;
      let cell;
      beforeEach(()=>{
        mockCellClickHandler.mockImplementation(jest.fn());
        expected = (props.value * -1).toString();
        render(Cell, props);
        cell = document.querySelector('td');

        fireEvent.click(cell);
      });
      it("THEN: The click handler is invoked.", () => {
        expect(mockCellClickHandler).toHaveBeenCalledTimes(1);
      });
      it("AND: The display value is toggled.", () => {
        expect(cell).toHaveTextContent(expected);
      });
    });
  });
});
