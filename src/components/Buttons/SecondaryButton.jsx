import { withStyles } from '@material-ui/core/styles'
import BaseButton from './BaseButton'

const SecondaryButton = withStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
    border: `2px solid ${theme.palette.button.secondary}`,
    backgroundColor: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.button.secondary,
    },
    '&:active': {
      boxShadow: 'inset 0 2px 0 2px rgba(0,0,0,0.2)',
    },
  },
}))(BaseButton)

export default SecondaryButton
