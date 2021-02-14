import React from 'react'
import * as RTL from '@testing-library/react'
import Chance from 'chance'

import AText from '../../src/AText/AText'
import { alignable, justifiable } from '../enums/staticClasses';
import { asText } from '../enums/as';
import { testWithProp, testWithNoProp } from '../helpers/staticClassList';
import { testAsProp } from '../helpers/asElement';

jest.mock('aspire-components-helpers')

const chance = new Chance()

const staticClassList = [
  justifiable,
  alignable,
]

describe('AText', () => {

  beforeEach(() => {
    staticClassList.forEach(({method}) => method.mockReturnValue([]))
  });

  afterEach(jest.resetAllMocks);
  
  describe('defaults', () => {

    test('should be p element', () => {
      const {container} = RTL.render(<AText />)

      expect(container).toContainHTML('p')
    });

    test('should have a-heading class', () => {
      const {container} = RTL.render(<AText />)

      expect(container.firstChild).toHaveClass('a-text')
    });

    test('should be able to assign a class', () => {
      const expectedClassName = chance.word()
      
      const {container} = RTL.render(<AText className={expectedClassName} />)
      
      expect(container.firstChild).toHaveClass(expectedClassName)
    });

  });

  describe('as', () => {

    test.each([...asText])('should assign html element %p', (value) => {
      testAsProp(AText, value)
    });

  });

  describe('add static class to classlist', () => {

    describe('has prop', () => {

      test.each([...staticClassList])('should get classlist containing class from %p', (value) => {
        testWithProp(AText, value.method, value.field)
      });

    });

    describe('does not have prop', () => {

      test.each([...staticClassList])('should get classlist without class from class from %p', (value) => {
        testWithNoProp(AText, value.method)
      });

    });

  });

});