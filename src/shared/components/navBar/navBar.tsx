import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from '../../pictures/EG-logo.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: 'transparent',
      boxShadow: 'none'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    logo: {
      maxWidth: 160
    },
    button: {
      margin: theme.spacing(1),
    },
  }),
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <img src={logo} alt="logo" className={classes.logo} />
          <Typography variant="h6" className={classes.title}>
            Protect your trip
          </Typography>
          <Button variant="outlined" color="secondary" className={classes.button}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}