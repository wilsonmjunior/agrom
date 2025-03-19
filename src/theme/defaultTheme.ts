import { colors } from './colors';

export const defaultTheme = {
  colors: {
    primary: colors.primary.main,
    secondary: colors.neutral[500],
    background: colors.background.default,
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
    },
    success: colors.success.main,
    warning: colors.warning.main,
    error: colors.error.main,
  },
  components: {
    button: {
      backgroundColor: colors.primary.main,
      color: colors.common.white,
    },
    // Adicione outros componentes conforme necessário
  },
  utils: {
    hexToRGBA: (hex: string, alpha: number) => {
      // Função para converter hex para RGBA
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    },
  },
};

export default defaultTheme;
