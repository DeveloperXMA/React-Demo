import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
    },
    planTypes: {
      textAlign: 'left',
      marginTop: '50px'
    }
  }),
);

export default function RadioButtonsGroup() {
  const classes = useStyles();
  const [value, setValue] = React.useState('female');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <div className={classes.planTypes}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Plan Types</FormLabel>
        <RadioGroup aria-label="play types" name="playTypes" value={value} onChange={handleChange}>
          <FormControlLabel value="Recommended" control={<Radio />} label="Recommended" />
          <FormControlLabel value="Comprehensive" control={<Radio />} label="Comprehensive" />
          <FormControlLabel value="Medical" control={<Radio />} label="Medical" />
          <FormControlLabel value="Evacuation" control={<Radio />} label="Evacuation" />
          <FormControlLabel value="Accidental Death" control={<Radio />} label="Accidental Death" />
          <FormControlLabel value="Vacation Rental Damage" control={<Radio />} label="Vacation Rental Damage" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}