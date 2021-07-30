import React, { Fragment } from 'react';
import { SimpleForm as SimpleFormRA, SimpleFormProps } from 'react-admin';
import ToolBar from 'components/Toolbar';

export const SimpleForm: React.FC<SimpleFormProps> = props => {
  return (
    <SimpleFormRA
      {...props}
      toolbar={props.hideTollBar ? <Fragment /> : <ToolBar {...props} />}
    >
      {props.children}
    </SimpleFormRA>
  );
};

export default SimpleForm;
