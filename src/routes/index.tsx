import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainPage from '../pages/MainPage';

const StackNavigator = createStackNavigator();

const routes: React.FC = () => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#FCFCFC' },
      }}
    >
      <StackNavigator.Screen name="MainPage" component={MainPage} />
    </StackNavigator.Navigator>
  );
};

export default routes;
