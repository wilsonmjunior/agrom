export const colors = {
  // Brand Colors
  primary: {
    main: '#00BFA5',
    light: '#33CCB5',
    dark: '#008C76',
    contrast: '#FFFFFF',
  },

  // Neutral Colors
  neutral: {
    50: '#FAFAFA',
    100: '#F4F4F5',
    200: '#E4E4E7',
    300: '#D4D4D8',
    400: '#A1A1AA',
    500: '#71717A',
    600: '#52525B',
    700: '#3F3F46',
    800: '#27272A',
    900: '#18181B',
  },

  // Semantic Colors
  success: {
    light: '#4ADE80',
    main: '#22C55E',
    dark: '#16A34A',
  },
  warning: {
    light: '#FCD34D',
    main: '#F59E0B',
    dark: '#D97706',
  },
  error: {
    light: '#FB7185',
    main: '#EF4444',
    dark: '#DC2626',
  },
  info: {
    light: '#38BDF8',
    main: '#0EA5E9',
    dark: '#0284C7',
  },

  // Common Colors
  common: {
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent',
  },

  // Background
  background: {
    default: '#FFFFFF',
    paper: '#F4F4F5',
    subtle: '#FAFAFA',
  },

  // Text
  text: {
    primary: '#18181B',
    secondary: '#71717A',
    disabled: '#A1A1AA',
    inverse: '#FFFFFF',
  },

  // Action
  action: {
    active: '#71717A',
    hover: '#F4F4F5',
    selected: '#E4E4E7',
    disabled: '#D4D4D8',
    focus: '#E4E4E7',
  },

  // Border
  border: {
    default: '#E4E4E7',
    subtle: '#F4F4F5',
  },
} as const;

// Type for our color tokens
export type ColorTokens = typeof colors;

// Helper to get typed color values
export type ColorValue = {
  [K in keyof typeof colors]: typeof colors[K] extends string
    ? typeof colors[K]
    : {
        [SubK in keyof typeof colors[K]]: typeof colors[K][SubK];
      };
}; 