import React from 'react'
import * as RTL from '@testing-library/react'
import Chance from 'chance'

import AHeader from '../../src/AHeader/AHeader'
import { alignable, justifiable } from '../enums/staticClasses';
import { testWithProp, testWithNoProp } from '../helpers/staticClassList';

jest.mock('aspire-components-helpers')

const chance = new Chance()

const staticClassList = [
  justifiable,
  alignable,
]

describe('AHeader', () => {

  beforeEach(() => {
    staticClassList.forEach(({method}) => method.mockReturnValue([]))
  });

  afterEach(jest.resetAllMocks);
  
  test('should have className', () => {
    const expectedClassName = chance.word()
    
    const {container} = RTL.render(<AHeader className={expectedClassName} />)
    const node: any = container.firstChild
    const hasClass = node.classList.contains(expectedClassName)
    
    expect(hasClass).toBe(true)
  });

  describe('add static class to classlist', () => {
    describe('has prop', () => {
      test.each([...staticClassList])('should get classlist containing class from %p', (value) => {
        testWithProp(AHeader, value.method, value.field)
      });
    });
    describe('does not have prop', () => {
      test.each([...staticClassList])('should get classlist without class from class from %p', (value) => {
        testWithNoProp(AHeader, value.method)
      });
    });
  });
});