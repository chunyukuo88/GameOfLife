import { cellClickHandler } from './CellUtils'

describe("CellUtils.ts", () => {
  describe("cellClickHandler()", () => {
    describe("WHEN: Given a gridStore, updateGrid cb, and 2 iterator index values,", () => {
      it("THEN: The updateGrid cb is invoked with a new grid.", () => {
        const gridStore = [
          [1, 1],
          [1, 1],
        ];
        const newGrid = [
          [-1, 1],
          [1, 1],
        ];
        const updateGrid = jest.fn();
        const i = 0;
        const j = 0;

        cellClickHandler(gridStore, updateGrid, i, j);

        expect(updateGrid).toHaveBeenCalledWith(newGrid)
      });
    });
  });
});
