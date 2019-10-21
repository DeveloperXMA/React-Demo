import React from 'react';
import { Grid, Link } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

interface productDetailsProps {
  price: string,
  planReviews: number,
  recommendedRate: number,
  planName: string,
  planLevel: string,
  imageUrl: string,
  rating: number
  benefits: string[]
}

export default class ProductItem extends React.Component<productDetailsProps> {
  

  private preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

  render() {
    const { imageUrl, planName, planLevel, price, planReviews, recommendedRate, rating, benefits } = this.props;

    return (
     <>
      <Grid 
        container
        spacing={3}
        direction='row'
        justify="space-between"
        alignItems="center"
       >
        <Grid item xs={2}>
          <img src={imageUrl} alt=""/>
        </Grid>
        <Grid item xs={2}>
          <Link href="#" onClick={this.preventDefault}>
            {planName}
          </Link>
        </Grid>
        <Grid item xs={3}>
          <div>
            <Rating name="size-small" value={2} size="small" />
          </div>
        </Grid>
        <Grid item xs={3}>
          asjdiajsdo
        </Grid>
        <Grid item xs={2}>
          asdijaosdjo
        </Grid>
      </Grid>
     </> 
    )
  }
}