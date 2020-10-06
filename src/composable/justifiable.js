export const useJustifiable = (base, justify) => {
  if (justify === 'start' || justify === 'left' || justify === 'top') return `${base}--justify-start`
  else if (justify === 'end' || justify === 'right' || justify === 'bottom') return `${base}--justify-end`
  else if (justify === 'center') return `${base}--justify-center`
  else if (justify === 'apart' || justify === 'between') return `${base}--justify-between`
  else if (justify === 'around') return `${base}--justify-around`
  // Default
  return `${base}--justify-start`
}
