import React from 'react';

const UserContext = React.createContext([
  { name: 'John', email: 'jhon.becker@free.fr' },
]);

export default UserContext;
