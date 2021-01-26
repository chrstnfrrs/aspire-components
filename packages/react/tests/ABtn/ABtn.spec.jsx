import React from 'react'
import * as RTL from "@testing-library/react"
import Chance from 'chance'
import { isAlignable, isJustifiable} from 'aspire-components-helpers'

import ABtn from '../../src/ABtn/ABtn'

jest.mock('aspire-components-helpers')

const chance = new Chance();

describe('ABtn', () => {
  let expectedClassName, expectedProp

  beforeEach(() => {
    expectedClassName = chance.word()
    expectedProp = chance.word()
    
    isJustifiable.mockReturnValue([])
    isAlignable.mockReturnValue([])
  });

  afterEach(jest.resetAllMocks);
  describe('justifiable', () => {
    describe('has justify prop', () => {
      let hasClass

      beforeEach(() => {
        isJustifiable.mockReturnValue([expectedClassName])

        const {container} = RTL.render(<ABtn justify={expectedProp} />)
        hasClass = container.firstChild.classList.contains(expectedClassName)
      });
      test('should call isJustifiable with correct variable', () => {
          expect(isJustifiable).toHaveBeenCalledTimes(1);
          expect(isJustifiable).toHaveBeenCalledWith(expectedProp);
        });
      test('should have justifiable response in classList', () => {
          expect(hasClass).toBe(true)
        });
    });
    describe('has no justify prop', () => {
      let hasClass

      beforeEach(() => { 
        const {container} = RTL.render(<ABtn />)
        hasClass = container.firstChild.classList.contains(expectedClassName)
      });
      test('should call isJustifiable with undefined', () => {
          expect(isJustifiable).toHaveBeenCalledTimes(1);
          expect(isJustifiable).toHaveBeenCalledWith(undefined);
        });
      test('should NOT have justifiable response in classList', () => {
        expect(hasClass).toBe(false)
        });
    });
  });
  describe('alignable', () => {
    
    describe('has align prop', () => {
      let hasClass

      beforeEach(() => {
        isAlignable.mockReturnValue([expectedClassName])

        const {container} = RTL.render(<ABtn align={expectedProp} />)
        hasClass = container.firstChild.classList.contains(expectedClassName)
      });
      test('should call isAlignable with correct variable', () => {
          expect(isAlignable).toHaveBeenCalledTimes(1);
          expect(isAlignable).toHaveBeenCalledWith(expectedProp);
        });
      test('should have justifiable response in classList', () => {
          expect(hasClass).toBe(true)
        });
    });
    describe('has no align prop', () => {
      let hasClass

      beforeEach(() => { 
        const {container} = RTL.render(<ABtn />)
        hasClass = container.firstChild.classList.contains(expectedClassName)
      });
      test('should call isJustifiable with undefined', () => {
          expect(isAlignable).toHaveBeenCalledTimes(1);
          expect(isAlignable).toHaveBeenCalledWith(undefined);
        });
      test('should NOT have justifiable response in classList', () => {
        expect(hasClass).toBe(false)
        });
    });
  });
});