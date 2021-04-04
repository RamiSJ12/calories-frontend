import { Avatar, Paper, Typography } from '@material-ui/core';
import {
  FilterTiltShift,
  Help,
  MailOutline,
  Person,
  Settings,
} from '@material-ui/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import commonStyles from '../utils/commonStyles';
import Header from './Header';
import NavigationBar from './NavigationBar';

const More = () => {
  const commonClasses = commonStyles();
  const chartData = useSelector(state => state.chartDataState);

  return chartData.length === 0 ? (
    <>
      <Header title="More" />
      <h1 className={commonClasses.darkText}>No data</h1>
      <NavigationBar />
    </>
  ) : (
    <>
      <Header title="More" />
      <Paper elevation={0} className={`${commonClasses.normalPadding} ${commonClasses.displayFlex}`}>
        <Avatar className={commonClasses.avatarPadding}>{chartData[0].user.name[0]}</Avatar>
        <div className={commonClasses.leftMargin15}>
          <Typography color="textSecondary" component="h2" className={commonClasses.fontWeightBold}>{chartData[0].user.name}</Typography>
          <Typography color="primary" variant="subtitle2">{chartData[0].user.gender}</Typography>
        </div>
      </Paper>
      <Paper elevation={0} className={`${commonClasses.displayFlex} ${commonClasses.morePaperBg} ${commonClasses.normalPadding}`}>
        <FilterTiltShift className={commonClasses.textSecondary} />
        <Typography color="textSecondary" className={commonClasses.leftMargin15}>Your Goal</Typography>
      </Paper>
      <Paper elevation={0} className={`${commonClasses.displayFlex} ${commonClasses.morePaperBg} ${commonClasses.normalPadding}`}>
        <MailOutline className={commonClasses.textSecondary} />
        <Typography color="textSecondary" className={commonClasses.leftMargin15}>Mailing List</Typography>
      </Paper>
      <Paper elevation={0} className={`${commonClasses.displayFlex} ${commonClasses.morePaperBg} ${commonClasses.normalPadding}`}>
        <Person className={commonClasses.textSecondary} />
        <Typography color="textSecondary" className={commonClasses.leftMargin15}>You Profile</Typography>
      </Paper>
      <Paper elevation={0} className={`${commonClasses.displayFlex} ${commonClasses.morePaperBg} ${commonClasses.normalPadding}`}>
        <Settings className={commonClasses.textSecondary} />
        <Typography color="textSecondary" className={commonClasses.leftMargin15}>Settings</Typography>
      </Paper>
      <Paper elevation={0} className={`${commonClasses.displayFlex} ${commonClasses.morePaperBg} ${commonClasses.normalPadding}`}>
        <Help className={commonClasses.textSecondary} />
        <Typography color="textSecondary" className={commonClasses.leftMargin15}>Help</Typography>
      </Paper>
      <NavigationBar />
    </>
  );
};

export default More;
