import React from 'react'
import clsx from 'clsx';

import {isJustifiable, isAlignable} from 'aspire-components-helpers'
import 'aspire-components-scss/build/index.scss'

import { AHeroProps } from './AHero.types'
import './AHero.scss'

const AHero: React.FC<AHeroProps> = (props) => {
  const classList = [
    'a-hero',
    isJustifiable(props.justify),
    isAlignable(props.align),
  ]

  return <div className={clsx(props.className, classList)}>{props.children}</div>
}

export default AHero