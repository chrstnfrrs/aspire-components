const align = {
  start: 'align-start',
  end: 'align-end',
  center: 'align-center',
  baseline: 'align-baseline',
  stretch: 'align-stretch'
}

export const isAlignable = (type) => align[type] ? [align[type]] : []