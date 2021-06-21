import Badge from '@material-ui/core/Badge'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Popover from '@material-ui/core/Popover'
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import camelCase from 'lodash/camelCase'
import upperFirst from 'lodash/upperFirst'
import React, { useState, useRef } from 'react'
import SettingsIcon from 'src/components/Icons/SettingsIcon'
import SelectInput from 'src/components/SelectInput'
import SwitchInput from 'src/components/SwitchInput'
import { Themes } from 'src/config/constants'
import { useSettings } from 'src/context/SettingsContext'

const useStyles = makeStyles((theme) => ({
  badge: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginTop: 10,
    marginRight: 5,
  },
  popover: {
    width: 320,
    padding: theme.spacing(2),
  },
}))

function Settings() {
  const classes = useStyles()
  const ref = useRef(null)
  const { settings, saveSettings } = useSettings()
  const [isOpen, setOpen] = useState(false)
  const [values, setValues] = useState({
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    theme: settings.theme,
  })

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = (field, value) => {
    setValues({
      ...values,
      [field]: value,
    })
  }

  const handleSave = () => {
    saveSettings(values)
    setOpen(false)
  }

  return (
    <>
      <Tooltip title="Settings">
        <Badge
          classes={{ badge: classes.badge }}
          color="secondary"
          variant="dot"
        >
          <IconButton color="inherit" ref={ref} onClick={handleOpen}>
            <SettingsIcon fontSize="small" />
          </IconButton>
        </Badge>
      </Tooltip>
      <Popover
        anchorEl={ref.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        classes={{ paper: classes.popover }}
        open={isOpen}
        onClose={handleClose}
      >
        <Typography color="textPrimary" variant="h4">
          Settings
        </Typography>
        <Box mt={2} px={1}>
          <SwitchInput
            checked={values.direction === 'rtl'}
            edge="start"
            label="RTL"
            name="direction"
            onChange={(event) =>
              handleChange('direction', event.target.checked ? 'rtl' : 'ltr')
            }
          />
        </Box>
        <Box mt={2} px={1}>
          <SwitchInput
            checked={values.responsiveFontSizes}
            edge="start"
            label="Responsive font sizes"
            name="direction"
            onChange={(event) =>
              handleChange('responsiveFontSizes', event.target.checked)
            }
          />
        </Box>
        <Box mt={2}>
          <SelectInput
            fullWidth
            label="Theme"
            name="theme"
            value={values.theme}
            variant="outlined"
            onChange={(event) => handleChange('theme', event.target.value)}
          >
            {Object.keys(Themes).map((theme) => (
              <option key={theme} value={theme}>
                {upperFirst(camelCase(theme))}
              </option>
            ))}
          </SelectInput>
        </Box>
        <Box mt={2}>
          <Button
            fullWidth
            color="secondary"
            variant="contained"
            onClick={handleSave}
          >
            Save Settings
          </Button>
        </Box>
      </Popover>
    </>
  )
}

export default Settings
