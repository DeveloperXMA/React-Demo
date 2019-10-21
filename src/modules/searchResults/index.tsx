import React from "react";
import { CircularProgress, Grid } from "@material-ui/core";
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
    }, 5000) 

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
      <div>
        Heleleo
      </div>
    )
  }
}