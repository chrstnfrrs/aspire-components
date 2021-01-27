import * as RTL from "@testing-library/react"
import React from 'react'
import Chance from 'chance'

const chance = new Chance();

export const testWithProp = (Component, func, propertyField) => {
  const expectedClassName = chance.word()
  func.mockReturnValue([expectedClassName])

  const dynamicProps = {}
  const expectedProp = chance.word()
  dynamicProps[propertyField] = expectedProp
  
  const {container} = RTL.render(<Component {...dynamicProps} />)
  const node: any = container.firstChild
  const hasClass = node.classList.contains(expectedClassName)

  expect(func).toHaveBeenCalledTimes(1);
  expect(func).toHaveBeenCalledWith(expectedProp);
  expect(hasClass).toBe(true)
}

export const testWithNoProp = (Component, func) => {
  const expectedClassName = chance.word()
  func.mockReturnValue([])

  const {container} = RTL.render(<Component />)
  const node: any = container.firstChild
  const hasClass = node.classList.contains(expectedClassName)

  expect(func).toHaveBeenCalledTimes(1);
  expect(func).toHaveBeenCalledWith(undefined);
  expect(hasClass).toBe(false)
}