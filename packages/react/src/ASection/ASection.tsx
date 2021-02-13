import React from 'react'
import clsx from 'clsx';

import {isJustifiable, isAlignable} from 'aspire-components-helpers'
import 'aspire-components-scss/build/index.scss'

import { ASectionProps } from './ASection.types'
import './ASection.scss'

const ASection: React.FC<ASectionProps> = (props) => {
  const classList = [
    'a-section',
    isJustifiable(props.justify),
    isAlignable(props.align),
  ]

  return <section className={clsx(props.className, classList)}>{props.children}</section>
}

export default ASection