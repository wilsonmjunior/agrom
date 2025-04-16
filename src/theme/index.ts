import defaultTheme from './defaultTheme';

const lightTheme = {
  colors: {
    primary: '#ff1ff4',
    secondary: '#1ff4ff'
  },
  gap: (v: number) => v * 8
}

const otherTheme = {
  colors: {
    primary: '#aa12ff',
    secondary: 'pink'
  },
  gap: (v: number) => v * 8
}

const appThemes = {
  light: lightTheme,
  other: otherTheme,
  default: defaultTheme
}

const breakpoints = {
  xs: 0,
  sm: 300,
  md: 500,
  lg: 800,
  xl: 1200
}

type AppBreakpoints = typeof breakpoints
type AppThemes = typeof appThemes

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

export const configure = {
  settings: {
    initialTheme: () => 'default', // Change this line
  },
  breakpoints,
  themes: appThemes
} as any;
