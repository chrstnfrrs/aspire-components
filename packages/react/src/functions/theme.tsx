const keyToVariableMap = {
  color: '--A-color'
}

export const setTheme = (theme) => {
  const keys = Object.keys(theme);
  const root = document.documentElement;
  
  keys.forEach((key) => {
    if (keyToVariableMap[key]) {
      root.style.setProperty(keyToVariableMap[key], theme[key])
    }
  })
}