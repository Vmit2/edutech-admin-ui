/* eslint-disable no-console */
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import merge from 'lodash/merge'
import { lightTheme } from './themeConfig/light'
import { defaultOverrides } from './themeConfig/overrides'
import { defaultTypography } from './themeConfig/typography'

const baseConfig = {
  direction: 'ltr',
  typography: defaultTypography,
  overrides: defaultOverrides,
}

const themeConfigs = [lightTheme]

export function createTheme(settings = {}) {
  let themeConfig = themeConfigs.find((theme) => theme.name === settings.theme)

  if (!themeConfig) {
    console.warn(new Error(`The theme ${settings.theme} is not valid`))

    themeConfig = lightTheme
  }

  let theme = createMuiTheme(
    merge({}, baseConfig, themeConfig, { direction: settings.direction }),
  )

  if (settings.responsiveFontSizes) {
    theme = responsiveFontSizes(theme)
  }

  return theme
}
