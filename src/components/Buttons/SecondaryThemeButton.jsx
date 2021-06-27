import { withStyles } from '@material-ui/core/styles'
import BaseButton from './BaseButton'

const SecondaryThemeButton = withStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
    border: `2px solid ${theme.palette.secondary.light}`,
    backgroundColor: theme.palette.secondary.light,
    '&:hover': {
      border: `2px solid ${theme.palette.secondary.main}`,
      backgroundColor: theme.palette.secondary.main,
    },
    '&:active': {
      border: `2px solid ${theme.palette.secondary.dark}`,
      backgroundColor: theme.palette.secondary.dark,
      boxShadow: 'inset 0 2px 0 2px rgba(0,0,0,0.2)',
    },
  },
}))(BaseButton)

export default SecondaryThemeButton
