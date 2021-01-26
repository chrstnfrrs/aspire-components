import Chance from 'chance'

import {isAlignable} from '../src/helpers/alignable'

const chance = new Chance()
const keyList = ['start', 'end', 'center', 'baseline', 'stretch']

describe('alignable', () => {
  describe('isAlignable', () => {
    test.each([...keyList])('should return align-%s', (value) => {
      expect(isAlignable(value)[0]).toStrictEqual(`align-${value}`)
    });
    test('should return empty array', () => {
      expect(isAlignable(chance.word())).toStrictEqual([])
    });
  });
})