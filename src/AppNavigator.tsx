import React, {useContext} from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import {
  CompositeNavigationProp,
  NavigationContainer,
} from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import LibraryScreen from './screens/LibraryScreen';

import {mainColor} from './colors';
import AppMenu from './components/AppMenu';
import MenuIcon from './components/MenuIcon';

export type StackNavigatorParams = {
  Home: {
    refresh?: boolean;
  };
  Search: undefined;
  Library: undefined;
};

export type DrawerStackNavigatorParams = {
  Main: undefined;
};

export type AppNavigationParams = CompositeNavigationProp<
  DrawerNavigationProp<DrawerStackNavigatorParams, 'Main'>,
  StackNavigationProp<StackNavigatorParams>
>;

const Stack = createStackNavigator<StackNavigatorParams>();
const Drawer = createDrawerNavigator<DrawerStackNavigatorParams>();

const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: mainColor,
        },
        headerTintColor: 'white',
      }}
      initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Recipe Library',
          headerLeft: () => <MenuIcon />,
        }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Search',
          headerLeft: () => <MenuIcon />,
        }}
      />
      <Stack.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          title: 'Library',
          headerLeft: () => <MenuIcon />,
        }}
      />
      {/* <Stack.Screen
        name="CategoryCount"
        component={CategoryCountScreen}
        options={{
          headerBackTitle: 'Back',
          title: 'Category Count',
        }}
      /> */}
    </Stack.Navigator>
  );
};

const AppNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      drawerContent={({navigation}) => <AppMenu navigation={navigation} />}>
      <Drawer.Screen component={MainNavigator} name="Main" />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
