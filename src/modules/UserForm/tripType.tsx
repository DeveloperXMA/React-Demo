import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140,
    backgroundSize: 'contain'
  },
});

const images = {
  flightUrl: 'https://cdn.insuremytrip.com/resources/27927/insuremytrip-icon-airplane_1.svg',
  curiseUrl: 'https://cdn.insuremytrip.com/resources/26405/insuremytrip-icon-cruise_1.svg',
  hotelUrl:  'https://cdn.insuremytrip.com/resources/27929/insuremytrip-icon-hotel_1.svg',
  checkMarkUrl: 'https://cdn.insuremytrip.com/resources/26321/insuremytrip-icon-vacation-check_2.svg'
}

const clickHandler = (event: any) => {
  let oldUrl = event.currentTarget.style['background-image'];
  console.log(event.currentTarget.id)
  if (oldUrl.indexOf('vacation-check_2') > 0) {
    if (event.currentTarget.id === 'flightIcon') {
      event.currentTarget.style['background-image']  = `url(${images.flightUrl})`;
    } else if (event.currentTarget.id === 'hotelIcon') {
      event.currentTarget.style['background-image']  = `url(${images.hotelUrl})`;
    } else if (event.currentTarget.id === 'curiseIcon') {
      event.currentTarget.style['background-image']  = `url(${images.curiseUrl})`;
    }
  } else {
    event.currentTarget.style['background-image']  = `url(${images.checkMarkUrl})`;
  }
  // event.currentTarget.style['background-image']  = 'url("https://cdn.insuremytrip.com/resources/26321/insuremytrip-icon-vacation-check_2.svg")';
}

export default function TripType() {
  const classes = useStyles();

  return (
    <>
      <h3>What are you planning to do on your trip?</h3>
      <p>If you tell us more information about your trip, we can recommend a plan more specific to your coverage needs.</p>
      <p>Select all that apply.</p>
      <Grid container spacing={3}>
        <Grid item xs>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                onClick={clickHandler}
                className={classes.media}
                image={images.flightUrl}
                title="Taking a flight"
                id="flightIcon"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Taking a flight
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Using an airplane as part of your travel to a destination or multiple destinations
          </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={images.curiseUrl}
                title="Taking a cruise"
                id="curiseIcon"
                onClick={clickHandler}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Taking a cruise
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  An overnight stay on a ship, typically stopping at multiple ports along the way
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={images.flightUrl}
                title="Staying in a hotel or resort"
                id="hotelIcon"
                onClick={clickHandler}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Staying in a hotel or resort
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  An accommodation that provides a room or suite for one or more nights
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}