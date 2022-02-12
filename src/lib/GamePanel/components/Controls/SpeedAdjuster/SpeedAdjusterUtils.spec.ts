import { getReactiveCssClass, sliderHandler } from './SpeedAdjusterUtils';

describe('SpeedAdjusterUtils.ts', () => {
  describe('getReactiveCssClass()', () => {
    describe('WHEN: Given a "values" number between 0 and 100,', () => {
      it.each`
        value | cssClass
        ${9}  | ${'below10'}
        ${19}  | ${'below20'}
        ${29}  | ${'below30'}
        ${39}  | ${'below40'}
        ${49}  | ${'below50'}
        ${59}  | ${'below60'}
        ${69}  | ${'below70'}
        ${79}  | ${'below80'}
        ${89}  | ${'below90'}
        ${91}  | ${'above90'}
      `
      ('THEN: It returns the "$cssClass" CSS class name', ({value, cssClass}) => {
        const result = getReactiveCssClass(value);

        expect(result).toEqual(cssClass);
      });
    });
  });
  describe('sliderHandler', () => {
    describe('WHEN: Given an event and two store-updating functions,', () => {
      it('THEN: The functions are invoked with "false" and the event, respectively.', () => {
        const event = {
          target: {
            value: 5
          }
        };
        const [ updateTicking, updateSpeed ] = [ jest.fn(), jest.fn() ];

        sliderHandler(event, updateTicking, updateSpeed);

        expect(updateTicking).toHaveBeenCalledWith(false);
        expect(updateSpeed).toHaveBeenCalledWith(5);
      });
    });
  });
});
