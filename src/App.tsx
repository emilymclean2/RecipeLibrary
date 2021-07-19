import { NavigationContainer } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';


import AppNavigator from './AppNavigator';


const App: React.FC = () => {
  return (
  <NavigationContainer>
          <AppNavigator />

  </NavigationContainer>
    
  );
};

export default App;
