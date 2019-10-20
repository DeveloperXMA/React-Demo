import React from 'react';
import { Container, Link, Popover, Typography, FormControl, InputLabel, Input, InputAdornment } from '@material-ui/core';

interface tripCostState {
  isTotalTripCostOpen: boolean,
  totalTripCost: string
}

export default class TripCost extends React.Component<{}, tripCostState> {

  constructor(props: any) {
    super(props);
    this.state = {
      isTotalTripCostOpen: false,
      totalTripCost: ''
    }
  }

  private anchorEl: HTMLAnchorElement | null = null;

  private handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    this.setAnchorEl(event.currentTarget);
  };

  private handleChange = (prop: keyof tripCostState) => (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    this.setState({
      totalTripCost: event.target.value
    })
  }

  private setAnchorEl = (el: HTMLAnchorElement | null) => {
    this.anchorEl = el;
    if (el && el.id === 'totalCost') {
      this.setState({
        isTotalTripCostOpen: true
      });
    }
  }

  private handleClose = () => {
    this.anchorEl = null;
    this.setState({
      isTotalTripCostOpen: false,
    })
  }

  render() {
    return (
      <Container className="trip-cost">
        <h3>Let's protect your travel expenses.</h3>
        <p>Entering the <Link id="totalCost" onClick={this.handleClick}>total trip cost</Link> for all travelers will allow us to find you available cancellation and interruption benefits.</p>
        <Popover
          open={this.state.isTotalTripCostOpen}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          anchorEl={this.anchorEl}
          onClose={this.handleClose}
        >
          <Typography className="popover-text">
            Insure all prepaid, non-refundable expenses travelers will have by the time they step out the door to start this trip. Include prepaid airline tickets, cruise expenses, accommodations, and trip extras (such as tours, excursions, event tickets, etc.).
            </Typography>
        </Popover>
        <p>When we know your first payment or deposit, we can also identify any time-sensitive benefits.</p>
        <FormControl fullWidth >
          <InputLabel htmlFor="adornment-amount">Total trip cost</InputLabel>
          <Input
            id="adornment-amount"
            value={this.state.totalTripCost}
            onChange={this.handleChange('totalTripCost')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
      </Container>
    )
  }
} 