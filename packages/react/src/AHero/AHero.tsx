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

  let styles = {}

  if (props.backgroundImage) {
    styles = {
      ...styles,
      background: `url(${props.backgroundImage}) no-repeat center center scroll`
    }
  }

  return <div className={clsx(props.className, classList)} style={styles}>{props.children}</div>
}

export default AHero