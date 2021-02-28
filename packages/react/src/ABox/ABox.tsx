import React from 'react'
import clsx from 'clsx';

import './ABox.scss'
import { ABoxProps } from './ABox.types'

import {isJustifiable, isAlignable} from 'aspire-components-helpers'
import 'aspire-components-scss/build/index.scss'


const widthMap = {
  512: 'a-width--512'
}

const changeWidth = (width) => widthMap[width];

const ABox: React.FC<ABoxProps> = (props) => {
  const classList = [
    'a-box',
    isJustifiable(props.justify),
    isAlignable(props.align),
    changeWidth(props.width)
  ]

  return <div className={clsx(props.className, classList)}>{props.children}</div>
}

export default ABox