import React from 'react';
import { Box, Link, Popover, Typography, FormGroup, TextField } from '@material-ui/core';
import './userForm.scss';

interface travelerState {
  age: string,
  citizenship: string,
  residence: string,
  others?: [string]
  isPopover1Open: boolean,
  isPopover2Open: boolean
}

export default class Travelers extends React.Component<{}, travelerState> {

  constructor(props: any) {
    super(props);
    this.state = {
      age: '',
      citizenship: '',
      residence: '',
      isPopover1Open: false,
      isPopover2Open: false
    }
  }

  private anchorEl: HTMLAnchorElement | null = null;

  private handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    this.setAnchorEl(event.currentTarget);
  };

  private setAnchorEl = (el: HTMLAnchorElement | null) => {
    this.anchorEl = el;
    if (el && el.id === 'travelAge') {
      this.setState({
        isPopover1Open: true
      });
    } else if (el && el.id === 'moreThan10') {
      this.setState({
        isPopover2Open: true
      })
    }
  }

  private handleClose = () => {
    this.anchorEl = null;
    this.setState({
      isPopover1Open: false,
      isPopover2Open: false
    })
  }

  private handleFormhange = (fieldName: keyof travelerState) => (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (fieldName) {
      case 'age':
        this.setState({
          age: event.target.value
        });
        break;
      case 'citizenship':
        this.setState({
          citizenship: event.target.value
        });
        break;
      case 'residence':
        this.setState({
          residence: event.target.value
        });
        break;
    }
  }

  render() {
    return (
      <Box className="travelers">
        <h3>Who needs to be insured on this trip?</h3>
        <div className="prompt-text">
          <p>Please enter the <Link id="travelAge" onClick={this.handleClick}>travelers' current age</Link>, citizenship, and residence.</p>
          <Popover
            open={this.state.isPopover1Open}
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
              Traveler ages should be as of today. If you're traveling with children under the age of 1, please enter "0".
            </Typography>
          </Popover>
          <p>Only travelers residing in the same state can be covered by the same plan. <Link id="moreThan10" onClick={this.handleClick}>Insuring more than 10 travelers?</Link></p>
          <Popover
            open={this.state.isPopover2Open}
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
              To insure more than 10 travelers on the same plan, please speak with a licensed representative from Expedia Group at 1-888-888-8888.
            </Typography>
          </Popover>
        </div>
        <FormGroup className="primary-traveler align-left">
          <legend>Primary Traveler</legend>
          <Box className="flex-align-row">
          <TextField
            id="standard-name"
            label="Age"
            value={this.state.age}
            margin="normal"
            onChange={this.handleFormhange('age')}
          />
          <TextField
            id="standard-name"
            label="Citizenship"
            value={this.state.citizenship}
            margin="normal"
            onChange={this.handleFormhange('citizenship')}
          />
          <TextField
            id="standard-name"
            label="Residence"
            value={this.state.residence}
            margin="normal"
            onChange={this.handleFormhange('residence')}
          />
          </Box>
        </FormGroup>
      </Box>
    );
  }
}