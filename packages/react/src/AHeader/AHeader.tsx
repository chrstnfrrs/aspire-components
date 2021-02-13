import React from 'react'
import clsx from 'clsx';

import {isJustifiable, isAlignable} from 'aspire-components-helpers'
import 'aspire-components-scss/build/index.scss'

import { AHeaderProps } from './AHeader.types'
import './AHeader.scss'

const AHeader: React.FC<AHeaderProps> = (props) => {
  const classList = [
    'a-header',
    isJustifiable(props.justify),
    isAlignable(props.align),
  ]

  return <header className={clsx(props.className, classList)}>{props.children}</header>
}

export default AHeader