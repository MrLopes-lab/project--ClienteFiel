import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, View } from 'react-native';
import Rotes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#333533" />
    <View style={{ flex: 1, backgroundColor: '#333533' }}>
      <Rotes />
    </View>
  </NavigationContainer>
);

export default App;
