import * as React from 'react';
import { Layout, AppBar, AppBarProps } from 'react-admin';

import ImageLogo from 'assets/logo.png';

import { useStyles } from './useStyles';

const CustomAppBar: React.FC = (props: AppBarProps) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} {...props}>
      <div className={classes.navbarRoot}>
        <img className={classes.logo} src={ImageLogo} />
      </div>
    </AppBar>
  );
};

const CustomLayout: React.FC = (props: AppBarProps) => (
  <Layout {...props} appBar={CustomAppBar}>
    {props.children}
  </Layout>
);

export default CustomLayout;
