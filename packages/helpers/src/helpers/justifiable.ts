const justify = {
  start: 'justify-start',
  end: 'justify-end',
  center: 'justify-center',
  between: 'justify-between',
  evenly: 'justify-evenly',
  around: 'justify-around',
}

export const isJustifiable = (type) => justify[type] ? [justify[type]] : []
