import PropTypes from 'prop-types'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { Themes } from '../config/constants';
import UserSettings from 'src/utils/UserSettings'

const SettingsContext = createContext(undefined)

const defaultSettings = {
  direction: 'ltr',
  responsiveFontSizes: true,
  theme: Themes.LIGHT,
}

export const SettingsConsumer = SettingsContext.Consumer

export function SettingsProvider({ settings, children }) {
  const [currentSettings, setCurrentSettings] = useState(
    settings || defaultSettings,
  )

  const handleSaveSettings = (updatedSettings = {}) => {
    const newSettings = {
      ...currentSettings,
      ...updatedSettings,
    }

    setCurrentSettings(newSettings)

    UserSettings.save(newSettings)
  }

  useEffect(() => {
    document.dir = currentSettings.direction
  }, [currentSettings])

  return (
    <SettingsContext.Provider
      value={{
        settings: currentSettings,
        saveSettings: handleSaveSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

SettingsProvider.propTypes = {
  settings: PropTypes.object,
  children: PropTypes.node.isRequired,
}

export function useSettings() {
  return useContext(SettingsContext)
}
