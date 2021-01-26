import Chance from 'chance'

import {isJustifiable} from '../src/helpers/justifiable'

const chance = new Chance()
const keyList = ['start', 'end', 'center', 'between', 'evenly', 'around']

describe('justifiable', () => {
  describe('isJustifiable', () => {
    test.each([...keyList])('should return justify-%s', (value) => {
      expect(isJustifiable(value)[0]).toStrictEqual(`justify-${value}`)
    });
    test('should return empty array', () => {
      expect(isJustifiable(chance.word())).toStrictEqual([])
    });
  });
});