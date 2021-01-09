import React from 'react'

import { ABtnProps } from './ABtn.types'

import './ABtn.scss'

const ABtn: React.FC<ABtnProps> = ({text}) => (
  <button className={'a-btn'}>{text}</button>
)

export default ABtn