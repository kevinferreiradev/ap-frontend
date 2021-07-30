import React from 'react';
import { SaveButton, Toolbar as ToolBarRA } from 'react-admin';
import { Button } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  buttonBack: {
    marginRight: 'auto',
  },
});

export const Tollbar: React.FC = props => {
  const classes = useStyles();
  return (
    <ToolBarRA {...props}>
      <Button
        variant="contained"
        color="primary"
        size="medium"
        className={classes.buttonBack}
        startIcon={<ChevronLeftIcon />}
        onClick={() => {
          window.history.back();
        }}
      >
        Go Back
      </Button>
      <SaveButton redirect="list" {...props} />
    </ToolBarRA>
  );
};

export default Tollbar;
