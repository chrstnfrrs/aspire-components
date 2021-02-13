import React from 'react'
import clsx from 'clsx';

import {isJustifiable, isAlignable} from 'aspire-components-helpers'
import 'aspire-components-scss/build/index.scss'

import { AHeadingProps } from './AHeading.types'
import './AHeading.scss'

const AHeading: React.FC<AHeadingProps> = (props) => {
  const classList = [
    'a-heading',
    isJustifiable(props.justify),
    isAlignable(props.align),
  ]

  return <h1 className={clsx(props.className, classList)}>{props.children}</h1>
}

export default AHeading