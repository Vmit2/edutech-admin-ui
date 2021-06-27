import { withStyles } from '@material-ui/core/styles'
import BaseButton from './BaseButton'

const TertiaryButton = withStyles((theme) => ({
  root: {
    color: theme.palette.button.tertiary,
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: theme.palette.button.tertiaryHover,
    },
    '&:active': {
      boxShadow: 'inset 0 2px 0 2px rgba(0,0,0,0.2)',
    },
  },
}))(BaseButton)

export default TertiaryButton
