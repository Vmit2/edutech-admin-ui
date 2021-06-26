import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup(props) {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
      <FormControlLabel value={props.value} control={<Radio />} label={props.radioLabel} />
        {/* {props.radio.map((eve)=>{
          <FormControlLabel value={eve.value} control={<Radio />} label={eve.radioLabel} />
        })} */}
        
      </RadioGroup>

  );
}