import React from 'react';

import Grid from '@material-ui/core/Grid';
import QuoteDetails from './quoteDetails';
import RadioButtonsGroup from './planTypes';

export default class LeftNav extends React.Component {
  render() {
    return (
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="flex-start"
        className="left-nav-bar"
      >
        <Grid item>
          <QuoteDetails 
            travelDates='10/22/19 - 10/28/19'
            destination='United States'
            tripCost='$1000'
            travelerAges={28}
          />
        </Grid>
        <Grid item>
          <RadioButtonsGroup />
        </Grid>
      </Grid>
    )
  }
}