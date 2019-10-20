import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from '../../shared/pictures/brand.png';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    transparent: {
      backgroundColor: '#fc0'
    },
    logo: {
      maxWidth: '150px'
    }
  }),
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.transparent}>
      <Container>
        <Toolbar>
          <img src={logo} alt="logo" className={classes.logo}/>
          <Typography variant="h6" className={classes.title}>
            Insure my trip
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </Container>
      </AppBar>
    </div>
  );
}