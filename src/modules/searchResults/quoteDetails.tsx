import React from 'react';
import { Grid } from '@material-ui/core';

interface quoteDetailsProps {
  destination: string,
  travelDates: string,
  travelerAges: number
  tripCost: string
}

export default class QuoteDetails extends React.Component<quoteDetailsProps> {

  render() {

    const { destination, travelDates, travelerAges, tripCost } = this.props;

    return (
      <Grid 
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        >
        <Grid item>
          <h3>Quote Details</h3>
        </Grid>
        <Grid item>
          <strong>Destination: </strong><span>{destination}</span>
        </Grid>
        <Grid item>
          <strong>Travel Dates:</strong><span>{travelDates}</span>
        </Grid>
        <Grid item>
          <strong>Traveler ages:</strong><span>{travelerAges}</span>
        </Grid>
        <Grid item>
          <strong>Total trip cost:</strong><span>{tripCost}</span>
        </Grid>
      </Grid>
    )
  }

}