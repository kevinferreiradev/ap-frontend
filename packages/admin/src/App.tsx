import React from 'react';
import { Resource, Admin } from 'react-admin';

import UserModule from 'modules/users';
import CategoryModule from 'modules/categories';
import StatusModule from 'modules/status';
import PartnersModule from 'modules/partners';
import CitiesModule from 'modules/cities';
import CustomLayout from 'customizations/CustomLayout';
import Login from 'modules/login';
import dataProvider from 'providers/dataProvider';
import authProvider from 'providers/authProvider';

const App: React.FC = () => (
  <Admin
    layout={CustomLayout}
    dataProvider={dataProvider}
    loginPage={Login}
    authProvider={authProvider}
  >
    <Resource {...UserModule} />
    <Resource {...CategoryModule} />
    <Resource {...StatusModule} />
    <Resource {...PartnersModule} />
    <Resource {...CitiesModule} />
    
  </Admin>
);

export default App;
