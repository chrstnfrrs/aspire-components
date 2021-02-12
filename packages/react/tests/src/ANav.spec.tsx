import ANav from '../../src/ANav/ANav'
import { alignable, justifiable } from '../enums/staticClasses';
import { testWithProp, testWithNoProp } from '../helpers/staticClassList';

jest.mock('aspire-components-helpers')

const staticClassList = [
  justifiable,
  alignable,
]

describe('ABtn', () => {
  beforeEach(() => {
    staticClassList.forEach(({method}) => method.mockReturnValue([]))
  });

  describe('asdf', () => {
    test('should asdf', () => {
      expect(true).toBe(true)
    });
  });
  afterEach(jest.resetAllMocks);
  describe('add static class to classlist', () => {
    describe('has prop', () => {
      test.each([...staticClassList])('should get classlist containing class from %p', (value) => {
        testWithProp(ANav, value.method, value.field)
      });
    });
    describe('does not have prop', () => {
      test.each([...staticClassList])('should get classlist without class from class from %p', (value) => {
        testWithNoProp(ANav, value.method)
      });
    });
  });
});