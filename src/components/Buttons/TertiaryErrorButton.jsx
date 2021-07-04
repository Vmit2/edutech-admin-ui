import { withStyles } from '@material-ui/core/styles'
import BaseButton from './BaseButton'

const TertiaryErrorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.error.main,
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: theme.palette.error.background,
    },
    '&:active': {
      boxShadow: 'inset 0 2px 0 2px rgba(0,0,0,0.2)',
    },
  },
}))(BaseButton)

export default TertiaryErrorButton
