import { withStyles } from "@material-ui/core/styles";
import BaseChip from "./BaseChip";

const DefaultChip = withStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.module.background,
  },
}))(BaseChip);

export default DefaultChip;
