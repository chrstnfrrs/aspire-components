import React from 'react'
import clsx from 'clsx';

import {isJustifiable, isAlignable} from 'aspire-components-helpers'
import 'aspire-components-scss/build/index.scss'

import { ALinkProps } from './ALink.types'
import './ALink.scss'

const decoratorClasses = {
  underline: 'a-underline'
};

const stringToClass = (decorator) => decoratorClasses[decorator]
const arrayToClasses = (decorators) => decorators.map(stringToClass)

const decoratorTypes = {
  string: stringToClass,
  array: arrayToClasses,
};

const isDecorated = (decorators) => decorators && decoratorTypes[typeof decorators](decorators)

const weightMap = {
  regular: 'a-weight--regular',
  medium: 'a-weight--medium',
  'semi-bold': 'a-weight--semi-bold',
  bold: 'a-weight--bold'
}

const isWeightable = (weight) => weightMap[weight]

const sizeMap = {
  12: 'a-size--12',
  14: 'a-size--14',
  16: 'a-size--16',
  20: 'a-size--20'
}

const isSizable = (size) => sizeMap[size]

const ALink: React.FC<ALinkProps> = (props) => {
  const classList = [
    'a-text',
    isJustifiable(props.justify),
    isAlignable(props.align),
    isDecorated(props.decorators),
    isWeightable(props.weight),
    isSizable(props.size)
  ]

  return <a href={props.href} className={clsx(props.className, classList)}>{props.children}</a>
}

export default ALink