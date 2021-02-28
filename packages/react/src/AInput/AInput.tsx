import React from 'react'
import clsx from 'clsx';

import 'aspire-components-scss/build/index.scss'

import { AInputProps } from './AInput.types'
import './AInput.scss'

const AHeader: React.FC<AInputProps> = (props) => {
  let optionalProps = {}

  const classList = [
    'a-input',
  ]

  const AInputTypeMap = {
    input: 'input'
  }
  
  const type = AInputTypeMap[props.type] || 'input'

  if (props.name) {
    optionalProps = {
      ...optionalProps,
      name: props.name
    }
  }
  
  if (props.placeholder) {
    optionalProps = {
      ...optionalProps,
      placeholder: props.placeholder
    }
  }

  if (props.value) {
    optionalProps = {
      ...optionalProps,
      placeholder: props.value
    }
  }

  return (
    <>
      {props.label && <label>{props.label}</label>}
      <input className={clsx(props.className, classList)} type={type} onChange={props.onChange} {...optionalProps} />
    </>
  )
}

export default AHeader