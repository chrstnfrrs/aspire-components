import React from 'react'
import * as RTL from '@testing-library/react'
import Chance from 'chance'

import AHeading from '../../src/AHeading/AHeading'
import { alignable, justifiable } from '../enums/staticClasses';
import { asHeading } from '../enums/as';
import { testWithProp, testWithNoProp } from '../helpers/staticClassList';
import { testAsProp } from '../helpers/asElement';

jest.mock('aspire-components-helpers')

const chance = new Chance()

const staticClassList = [
  justifiable,
  alignable,
]

describe('AHeading', () => {

  beforeEach(() => {
    staticClassList.forEach(({method}) => method.mockReturnValue([]))
  });

  afterEach(jest.resetAllMocks);
  
  describe('defaults', () => {

    test('should be h1 element', () => {
      const {container} = RTL.render(<AHeading />)

      expect(container).toContainHTML('h1')
    });

    test('should have a-heading class', () => {
      const {container} = RTL.render(<AHeading />)

      expect(container.firstChild).toHaveClass('a-heading')
    });

    test('should be able to assign a class', () => {
      const expectedClassName = chance.word()
      
      const {container} = RTL.render(<AHeading className={expectedClassName} />)
      
      expect(container.firstChild).toHaveClass(expectedClassName)
    });

  });

  describe('as', () => {

    test.each([...asHeading])('should assign html element %p', (value) => {
      testAsProp(AHeading, value)
    });

  });

  describe('add static class to classlist', () => {

    describe('has prop', () => {

      test.each([...staticClassList])('should get classlist containing class from %p', (value) => {
        testWithProp(AHeading, value.method, value.field)
      });

    });

    describe('does not have prop', () => {

      test.each([...staticClassList])('should get classlist without class from class from %p', (value) => {
        testWithNoProp(AHeading, value.method)
      });

    });

  });

});