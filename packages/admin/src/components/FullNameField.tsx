import React from 'react';

interface IFullName {
  source: string;
  label: string;
  record?: {
    firstName: string;
    lastName: string;
  };
}

const FullNameField: React.FC<IFullName> = ({ record }: IFullName) => (
  <span>{record ? `${record.firstName} ${record.lastName}` : ''}</span>
);

export default FullNameField;
