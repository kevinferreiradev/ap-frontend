import React from 'react';
import { Datagrid as DatagridRA, DatagridProps } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  header: {
    fontWeight: 'bold',
  },
});

export const Datagrid: React.FC<DatagridProps> = props => {
  const classes = useStyles();
  return (
    <DatagridRA {...props} classes={{ headerCell: classes.header }}>
      {props.children}
    </DatagridRA>
  );
};

export default Datagrid;
