import React from 'react'
import clsx from 'clsx';

import {isJustifiable, isAlignable} from 'aspire-components-helpers'
import 'aspire-components-scss/build/index.scss'

import { AHeadingProps } from './AHeading.types'
import './AHeading.scss'

const AH1 = (props) => <h1 className={props.className}>{props.children}</h1>
const AH2 = (props) => <h2 className={props.className}>{props.children}</h2>
const AH3 = (props) => <h3 className={props.className}>{props.children}</h3>
const AH4 = (props) => <h4 className={props.className}>{props.children}</h4>
const AH5 = (props) => <h5 className={props.className}>{props.children}</h5>
const AH6 = (props) => <h6 className={props.className}>{props.children}</h6>
const ASubtitle1 = (props) => <strong className={props.className}>{props.children}</strong>
const ASubtitle2 = (props) => <strong className={props.className}>{props.children}</strong>

const AHeaderTypeMap = {
  h1: AH1,
  h2: AH2,
  h3: AH3,
  h4: AH4,
  h5: AH5,
  h6: AH6,
  ['subtitle-1']: ASubtitle1,
  ['subtitle-2']: ASubtitle2,
}

const AHeading: React.FC<AHeadingProps> = (props) => {
  const classList = [
    'a-heading',
    isJustifiable(props.justify),
    isAlignable(props.align),
  ]

  const Component = AHeaderTypeMap[props.as] || AH1

  return <Component className={clsx(props.className, classList)}>{props.children}</Component>
}

export default AHeading