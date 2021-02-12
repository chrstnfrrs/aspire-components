import React from 'react'

import {isJustifiable, isAlignable} from 'aspire-components-helpers'
import 'aspire-components-scss/build/index.scss'

import { AContainerProps } from './AContainer.types'
import './AContainer.scss'

const AContainer: React.FC<AContainerProps> = (props) => {
  const classList = [
    'a-container',
    isJustifiable(props.justify),
    isAlignable(props.align),
  ]

  return <div className={classList.join(' ')}>{props.children}</div>
}

export default AContainer