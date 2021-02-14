import * as RTL from "@testing-library/react"
import React from 'react'

export const testAsProp = (Component, element) => {
  const {container} = RTL.render(<Component as={element} />)

  expect(container).toContainHTML(element)
}