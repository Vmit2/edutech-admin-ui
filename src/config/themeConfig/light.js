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
      red:'#FC1310',
      white : "#FFFFFF"
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
      distributer:'#2472FD'//'#2472FD'
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
      primary: '#7658F9',
      primaryHover: '#9d88f7',
      primaryActive: '#9d88f7',
      secondary: '#e9ecf2',
      tertiary: '#7658F9',
      tertiaryHover: '#e1dcfa',
    },
    module: {
      backgroundLight: '#7658F9',
      background: '#f4f6fa',
      border: '#e9ecf2',
    },
    shadow: {
      primary : "0px 2px 1px  rgba(0,0,0,0.1)",
      secondary : "0px 4px 4px 3px rgb(0 0 0 / 10%)",
    }
  },
}
