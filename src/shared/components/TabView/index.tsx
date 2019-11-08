import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import UserForm from '../../../modules/UserForm/travelTo';
import TravelDates from '../../../modules/UserForm/travelDates';
import Travelers from '../../../modules/UserForm/travelers';
import TripCost from '../../../modules/UserForm/tripCost';
import TripType from '../../../modules/UserForm/tripType';
import Button from '@material-ui/core/Button';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
  currentIndex?: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    marginTop: '100px'
  },
  button: {
    margin: theme.spacing(1),
  }
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    setCurrentIndex(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
    setCurrentIndex(index);
  };

  const clickHandler = ():any => {
    setCurrentIndex((currentIndex + 1) % 5);
    setValue((currentIndex + 1) % 5);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="Trip info"
        >
          <Tab label="Destination" {...a11yProps(0)} />
          <Tab label="Travel Dates" {...a11yProps(1)} />
          <Tab label="Travelers" {...a11yProps(2)} />
          <Tab label="Trip Cost" {...a11yProps(3)} />
          <Tab label="Other" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <UserForm />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <TravelDates />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Travelers />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <TripCost />
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <TripType />
        </TabPanel>
      </SwipeableViews>
      {(currentIndex !== 4) && <Button variant="contained" color="primary" component="span" className={classes.button} onClick={clickHandler}>Next</Button>}
    </div>
  );
}