import * as RTL from "@testing-library/react"
import React from 'react'
import Chance from 'chance'

const chance = new Chance();

export const testWithProp = (Component, method, field) => {
  const expectedClassName = chance.word()
  method.mockReturnValue([expectedClassName])

  const dynamicProps = {}
  const expectedProp = chance.word()
  dynamicProps[field] = expectedProp
  
  const {container} = RTL.render(<Component {...dynamicProps} />)
  const node: any = container.firstChild
  const hasClass = node.classList.contains(expectedClassName)

  expect(method).toHaveBeenCalledTimes(1);
  expect(method).toHaveBeenCalledWith(expectedProp);
  expect(hasClass).toBe(true)
}

export const testWithNoProp = (Component, method) => {
  const expectedClassName = chance.word()
  method.mockReturnValue([])

  const {container} = RTL.render(<Component />)
  const node: any = container.firstChild
  const hasClass = node.classList.contains(expectedClassName)

  expect(method).toHaveBeenCalledTimes(1);
  expect(method).toHaveBeenCalledWith(undefined);
  expect(hasClass).toBe(false)
}