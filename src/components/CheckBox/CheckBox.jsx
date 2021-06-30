import React from "react";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
export default function Checkboxes(props) {
    const [checked, setChecked] = React.useState(props.checked);
  
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
  
    return (
      <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            name={props.name}
            color={props.color}
          />
        }
        label={props.label}
      />
      </div>
    );
  }