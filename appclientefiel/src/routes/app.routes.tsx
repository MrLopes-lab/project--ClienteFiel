import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#333533' },
    }}
  >
    <App.Screen name="Landing" component={Landing} />
  </App.Navigator>
);

export default AppRoutes;
