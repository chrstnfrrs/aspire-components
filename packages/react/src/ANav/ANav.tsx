import React from 'react'
import clsx from 'clsx';

import {isJustifiable, isAlignable} from 'aspire-components-helpers'
import 'aspire-components-scss/build/index.scss'

import { ANavProps } from './ANav.types'
import './ANav.scss'

const ANav: React.FC<ANavProps> = (props) => {
  const classList = [
    'a-nav',
    isJustifiable(props.justify),
    isAlignable(props.align),
  ]

  return <nav className={clsx(props.className, classList)}>{props.children}</nav>
}

export default ANav