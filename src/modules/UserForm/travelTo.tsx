import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  }),
);

interface State {
  destination: string;
}

export default function UserForm() {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    destination: ''
  });

  const handleChange = (name: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <>
      <a href="#">What if I am going to multiple destinations or on a cruise?</a>
      <TextField
          id="standard-full-width"
          label="Destination"
          style={{ margin: 8 }}
          placeholder="Where are you travelling to?"
          fullWidth
          margin="normal"
          onChange={handleChange('destination')}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </>
  );
};