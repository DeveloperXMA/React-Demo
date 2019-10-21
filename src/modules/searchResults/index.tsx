import React from "react";
import { CircularProgress, Grid, Container } from "@material-ui/core";
import LeftNav from './leftNavBar';
import Products from './rightProducts';
import './index.scss';

interface myState {
  isFinishLoading: boolean
}

export default class SearchResults extends React.Component<{}, myState> {

  constructor(props:any) {
    super(props);
    this.state = {
      isFinishLoading: false
    }

    setTimeout(()=> {
      this.setState({
        isFinishLoading: true
      })
      document.body.style.backgroundImage = 'none';
      document.body.style.backgroundColor = '#ededed';
    }, 5000);

  }
  render () {
    return (
      !this.state.isFinishLoading ?
      <div className="overlay">
        <Grid 
          container
          direction="row"
          justify="center"
          alignItems="center"
          className="overlay-div"
        >
          <Grid item xs>
            <CircularProgress className='progress-bar' />
            <h2>Searching thousands of plans</h2>
            <small>for recommendations just for your trip</small>
          </Grid>
        </Grid>
      </div>
      :
      <Container className="search-results expedia-blue" maxWidth="lg">
        <div className="heading">We found theses plans</div>
        <Grid container spacing={3}>
          <Grid item md={3}>
            <LeftNav />
          </Grid>
          <Grid item md={9}>
            <Products />
          </Grid>
        </Grid>
      </Container>
    )
  }
}