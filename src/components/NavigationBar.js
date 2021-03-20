import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {
  InsertChart,
  MoreHoriz,
  PieChart,
  TrendingUp,
} from '@material-ui/icons';
import { Grid, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import commonStyles from '../utils/commonStyles';

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: '#67899c',
  },
  fSize: {
    fontSize: 9,
    [theme.breakpoints.up(390)]: {
      fontSize: 12,
    },
  },
  whiteCol: {
    color: '#fff',
  },
  activeBg: {
    backgroundColor: '#62b5e5',
  },
}));

const NavigationBar = () => {
  const classes = useStyles();
  const commonClasses = commonStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar disableGutters>
          <Grid container justify="space-between">
            <NavLink exact activeClassName={classes.activeBg} className={`${commonClasses.anchorText} ${commonClasses.flex1} ${commonClasses.centerText}`} to="/">
              <IconButton className={classes.whiteCol}>
                <Grid container direction="column" alignItems="center">
                  <InsertChart />
                  <Typography component="p" className={classes.fSize} variant="subtitle2" color="textPrimary">Add Measure</Typography>
                </Grid>
              </IconButton>
            </NavLink>
            <NavLink exact activeClassName={classes.activeBg} className={`${commonClasses.anchorText} ${commonClasses.flex1} ${commonClasses.centerText}`} to="/meals">
              <IconButton className={classes.whiteCol}>
                <Grid container direction="column" alignItems="center">
                  <TrendingUp />
                  <Typography component="p" className={classes.fSize} variant="subtitle2" color="textPrimary">Track It</Typography>
                </Grid>
              </IconButton>
            </NavLink>
            <NavLink exact activeClassName={classes.activeBg} className={`${commonClasses.anchorText} ${commonClasses.flex1} ${commonClasses.centerText}`} to="/progress">
              <IconButton className={classes.whiteCol}>
                <Grid container direction="column" alignItems="center">
                  <PieChart />
                  <Typography component="p" className={classes.fSize} variant="subtitle2" color="textPrimary">Progress</Typography>
                </Grid>
              </IconButton>
            </NavLink>
            <NavLink exact activeClassName={classes.activeBg} className={`${commonClasses.anchorText} ${commonClasses.flex1} ${commonClasses.centerText}`} to="/more">
              <IconButton className={classes.whiteCol}>
                <Grid container direction="column" alignItems="center">
                  <MoreHoriz />
                  <Typography component="p" className={classes.fSize} variant="subtitle2" color="textPrimary">More</Typography>
                </Grid>
              </IconButton>
            </NavLink>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavigationBar;
