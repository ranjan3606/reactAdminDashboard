import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

export default function FormControlLabelPosition() {
  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          label="EMPTY SLOTS"
          labelPlacement="EMPTY SLOTS"
          value="EMPTY SLOTS"
          control={<Switch color="primary" />}
          
        />
       
      </FormGroup>
    </FormControl>
  );
}