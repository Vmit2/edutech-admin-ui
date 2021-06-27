import { withStyles } from '@material-ui/core/styles'
import BaseButton from './BaseButton'

const PrimaryButton = withStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
    border: `2px solid ${theme.palette.button.primary}`,
    backgroundColor: theme.palette.button.primary,
    '&:hover': {
      border: `2px solid ${theme.palette.button.primaryHover}`,
      backgroundColor: theme.palette.button.primaryHover,
    },
    '&:active': {
      border: `2px solid ${theme.palette.button.primaryActive}`,
      backgroundColor: theme.palette.button.primaryActive,
      boxShadow: 'inset 0 2px 0 2px rgba(0,0,0,0.2)',
    },
  },
}))(BaseButton)

export default PrimaryButton
