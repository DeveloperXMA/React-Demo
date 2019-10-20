import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Popover, Typography, Link } from '@material-ui/core';

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
    typography: {
      padding: theme.spacing(2),
      maxWidth: '800px',
      textAlign: 'center'
    },
    link: {
      margin: theme.spacing(1),
    }
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

  const [anchorEl, setAnchorEl] = React.useState<HTMLAnchorElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChange = (name: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [name]: event.target.value });
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Link href="#" className={classes.link} onClick={handleClick}>
        What if I am going to multiple destinations or on a cruise?
      </Link>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>
          If traveling outside the United States, enter the country where travelers will be spending the most time.<br />If spending equal time in multiple countries, choose your first international destination.
If taking a cruise, enter the first international port of arrival as your destination..</Typography>
      </Popover>
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