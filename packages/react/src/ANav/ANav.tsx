import React from 'react'
import clsx from 'clsx';

import {isJustifiable, isAlignable} from 'aspire-components-helpers'
import 'aspire-components-scss/build/index.scss'

import { ANavProps } from './ANav.types'
import './ANav.scss'

const createPadding = (padding) => {
  const paddingMap = {
    p4: 'p4'
  }

  return paddingMap[padding]
}

const ANav: React.FC<ANavProps> = (props) => {

  const classList = [
    'a-nav',
    isJustifiable(props.justify),
    isAlignable(props.align),
    createPadding(props.padding)
  ]

  let styles = {}

  if (!createPadding(props.padding) && props.padding) {
    styles = {
      ...styles,
      padding: props.padding
    }
  } 


  return <nav className={clsx(props.className, classList)} style={styles}>{props.children}</nav>
}

export default ANav