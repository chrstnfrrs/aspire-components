import React from 'react'
import clsx from 'clsx';

import {isJustifiable, isAlignable} from 'aspire-components-helpers'
import 'aspire-components-scss/build/index.scss'

import { AContainerProps } from './AContainer.types'
import './AContainer.scss'

const AContainer: React.FC<AContainerProps> = (props) => {
  const classList = [
    'a-container',
    props.col && 'col',
    isJustifiable(props.justify),
    isAlignable(props.align),
  ]

  return <div className={clsx(props.className, classList)}>{props.children}</div>
}

export default AContainer