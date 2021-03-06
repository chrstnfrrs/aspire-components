import React from 'react'
import clsx from 'clsx';

import {isJustifiable, isAlignable} from 'aspire-components-helpers'
import 'aspire-components-scss/build/index.scss'

import { ABtnProps } from './ABtn.types'
import './ABtn.scss'

const ABtn: React.FC<ABtnProps> = (props) => {
  const classList = [
    'a-btn',
    isJustifiable(props.justify),
    isAlignable(props.align),
  ]

  return <button className={clsx(props.className, classList)}>{props.children}</button>
}

export default ABtn