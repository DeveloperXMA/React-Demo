import React from 'react';
import { Grid, Link, Button, Modal, Backdrop, Fade, List, ListSubheader, ListItem, ListItemIcon, ListItemText, Collapse } from '@material-ui/core';
import { CheckCircle, ExpandLess, ExpandMore } from '@material-ui/icons';

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

interface myState {
  isModalOpen: boolean,
  isList1Open?: boolean,
  isList2Open?: boolean,
  isList3Open?: boolean
}

export default class ProductItem extends React.Component<productDetailsProps, myState> {

  constructor(props: productDetailsProps) {
    super(props);
    this.state = {
      isModalOpen: false,
      isList1Open: false,
      isList2Open: false,
      isList3Open: false
    }
  };

  private handleOpen = () => {
    this.setState({
      isModalOpen: true
    })
  }

  private handleClose = () => {
    this.setState({
      isModalOpen: false
    })
  }

  private handleClick =(name: string) => (event: any) => {
    if (name === 'isList1Open') {
      this.setState({
        isList1Open: !this.state.isList1Open
      })
    } else if (name === 'isList2Open') {
      this.setState({
        isList2Open: !this.state.isList2Open
      })
    } else if (name === 'isList3Open') {
      this.setState({
        isList3Open: !this.state.isList3Open
      })
    }
  }

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
          <Grid item sm={2}>
            <img src={imageUrl} alt="" />
          </Grid>
          <Grid item sm={2} className="align-left">
            <Link href="#" onClick={this.preventDefault}>
              {planName}
            </Link>
          </Grid>
          <Grid item sm={3} className="padding-space">
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-start">
              <Grid item>
                <Rating name="product-rating" value={rating} precision={0.5} size="small" />
              </Grid>
              <Grid item>
                <Link href="#" onClick={this.preventDefault}>
                  {planReviews} plan reviews
                </Link>
              </Grid>
              <Grid item className="cost-detail">
                {recommendedRate}% recommended
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={3}>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-end">
              <Grid item className="align-right">
                {price}
              </Grid>
              <Grid item>
                <small className="cost-detail">total cost for all travelers</small>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={2}>
            <Grid
              container
              direction="column"
              justify="space-between"
              alignItems="center"
              className="plan-button">
              <Grid item>
                <Button size="small" variant="contained" className="plan-button" color='primary'>Buy this plan</Button>
              </Grid>
              <Grid item>
                <Button size="small" variant="contained" className="plan-button" onClick={this.handleOpen}>Plan info</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div className="corner-ribbon top-left orange" data-toggle="tooltip" title="" data-original-title="Our Superior Plans have the most covered reasons for cancellation and interruption and the highest benefit limits for travel delay, baggage and emergency medical benefits.">{planLevel}<div className="chevron"></div></div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className="my-modal"
          open={this.state.isModalOpen}
          onClose={this.handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={this.state.isModalOpen}>
            <div className='paper'>
              <h2 id="transition-modal-title">Protect your trip</h2>
              <div id="transition-modal-description">
                <List
                  component="nav"
                  className="modal-list"
                  aria-labelledby="nested-list-subheader"
                  subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                      Your benefits
                    </ListSubheader>
                  }>
                  <ListItem button onClick={this.handleClick('isList1Open')}>
                    <ListItemIcon>
                      <CheckCircle />
                    </ListItemIcon>
                    <ListItemText primary="Cancel before you cruise: insurer reimburses up to" />
                    {this.state.isList1Open ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={this.state.isList1Open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItem button>
                        <ListItemText primary="100% of your cruise cost if you cancel due to illness, injury or other covered reasons" />
                      </ListItem>
                    </List>
                  </Collapse>
                  <ListItem button onClick={this.handleClick('isList2Open')}>
                    <ListItemIcon>
                      <CheckCircle />
                    </ListItemIcon>
                    <ListItemText primary="Catch up to your cruise:" />
                    {this.state.isList2Open ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={this.state.isList2Open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItem button>
                        <ListItemText primary="If your flight is delayed, we help you catch up to your cruise" />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary="Get reimbursed up to $1,300 for change fees and meals" />
                      </ListItem>
                    </List>
                  </Collapse>
                  <ListItem button onClick={this.handleClick('isList3Open')}>
                    <ListItemIcon>
                      <CheckCircle />
                    </ListItemIcon>
                    <ListItemText primary="Protection during your cruise: insurer reimburses up to" />
                    {this.state.isList3Open ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={this.state.isList3Open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItem button>
                        <ListItemText primary="100% of your cruise cost if you cut your cruise short due to illness or injury" />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary="$1,500 for lost, stolen or damaged baggage" />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary="$10,000 for eligible medical expenses" />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary="Plus 24/7 worldwide emergency hotline" />
                      </ListItem>
                    </List>
                  </Collapse>
                </List>
                <Link href="https://webservices.travelguard.com/Product/FileRetrieval.aspx?CountryCode=US&StateCode=NW&ProductCode=009164&PlanCode=P1&FileType=PROD_PLAN_GM" target="_blank">
                  View insurance details and disclosures
                </Link>
              </div>
            </div>
          </Fade>
        </Modal>
      </>
    )
  }
}