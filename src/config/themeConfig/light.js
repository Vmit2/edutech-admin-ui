import { Themes } from '../constants';

export const lightTheme = {
  name: Themes.LIGHT,
  palette: {
    type: 'light',
    common: {
      green: '#1eb7a1',
      blue: '#0161e7',
      blueLight: '#187bff',
      orange: '#ff7201',
      yellow: '#f49e00',
      pink: '#fc8ebe',
      red:'#FC1310'
    },
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#2f3334',
      secondary: '#888492',
      label: '#5c6063',
      side_labels:'#FFFFFF',
      user:'#FC1310',
      distributer:'#2472FD'
    },
    primary: {
      light: '#63ead2',
      main: '#FEC42D',
      dark: '#008673',
      contrastText: '#fff',
    },
    secondary: {
      light: '#187bff',
      main: '#0161e7',
      dark: '#0038b4',
      contrastText: '#fff',
    },
    error: {
      light: '#ff8b68',
      main: '#d75b3c',
      dark: '#a02b13',
      contrastText: '#fff',
      background: 'rgba(215,91,60,0.05)',
    },
    button: {
      primary: '#1eb7a1',
      primaryHover: '#1b9b88',
      primaryActive: '#128070',
      secondary: '#e9ecf2',
      tertiary: '#9d88f7',
      tertiaryHover: '#ddd7f7',
    },
    module: {
      backgroundLight: '#7658F9',
      background: '#f4f6fa',
      border: '#e9ecf2',
    },
  },
}
