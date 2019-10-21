import React from 'react';

import Grid from '@material-ui/core/Grid';
import ProductItem from './productItem';

export default class Products extends React.Component {
  render() {
    return (
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
      >
        <Grid item>
          <p className="align-left">Based on your trip dates and destination, Expedia unbiased algorithm chose these plans as excellent options due to their coverage for hurricanes and other severe weather.</p>
        </Grid>
        <Grid item className="product-item">
          <ProductItem
            price='$36.00'
            imageUrl='https://cdn.insuremytrip.com/resources/3872/travelex_logo.svg'
            planName='Travel Select'
            planLevel='SUPERIOR'
            rating={4.5}
            recommendedRate={98}
            planReviews={1475}
            benefits={["asdasd", "sifojasoifjaoisdj"]}
          />
        </Grid>
        <Grid item>
          Hello
        </Grid>
      </Grid>
    )
  }
}