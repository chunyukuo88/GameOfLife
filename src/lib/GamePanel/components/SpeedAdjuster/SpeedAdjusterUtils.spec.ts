import { getReactiveCssClass, sliderHandler } from './SpeedAdjusterUtils';

describe('SpeedAdjusterUtils.ts', () => {
  describe('getReactiveCssClass()', () => {
    describe('WHEN: Given a "values" number between 0 and 100,', () => {
      it('THEN: It returns a CSS class name', () => {
        const values = 45;
        const expectedResult = 'below50';

        const result = getReactiveCssClass(values);

        expect(result).toEqual(expectedResult);
      });
    });
  });
  describe('sliderHandler', () => {
    describe('WHEN: Given an event and two store-updating functions,', () => {
      it('THEN: The functions are invoked with "false" and the event, respectively.', () => {
        const event = {
          detail: {
            value: 5
          }
        };
        const [updateTicking, updateSpeed] = [ jest.fn(), jest.fn()];

        sliderHandler(event, updateTicking, updateSpeed);

        expect(updateTicking).toHaveBeenCalledWith(false);
        expect(updateSpeed).toHaveBeenCalledWith(5);
      });
    });
  });
});
