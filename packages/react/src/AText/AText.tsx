import React from 'react'
import clsx from 'clsx';

import {isJustifiable, isAlignable} from 'aspire-components-helpers'
import 'aspire-components-scss/build/index.scss'

import { ATextProps } from './AText.types'
import './AText.scss'

const AP = (props) => <p className={props.className}>{props.children}</p>
const AStrong = (props) => <strong className={props.className}>{props.children}</strong>

const ATextTypeMap = {
  p: AP,
  strong: AStrong,
}

const AText: React.FC<ATextProps> = (props) => {
  const classList = [
    'a-text',
    isJustifiable(props.justify),
    isAlignable(props.align),
  ]

  const Component = ATextTypeMap[props.as] || AP

  return <Component className={clsx(props.className, classList)}>{props.children}</Component>
}

export default AText