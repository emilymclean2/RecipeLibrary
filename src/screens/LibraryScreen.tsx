import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  ScrollView,
  FlatList,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackNavigatorParams} from '../AppNavigator';
import {RouteProp} from '@react-navigation/native';

type HomeNavigationProp = StackNavigationProp<StackNavigatorParams, 'Library'>;
type RouteProps = RouteProp<StackNavigatorParams, 'Library'>;

// import ScannerIcon from '../components/ScannerIcon';
import {mainColor, darkGray} from '../colors';

//import Icon from 'react-native-vector-icons/FontAwesome5';
// import axios from 'axios';

interface Props {
  navigation: HomeNavigationProp;
  route: RouteProps;
}

const LibraryScreen: React.FC<Props> = () => {
  const functionName = (num: number) => {};

  return (
    <View style={{flex: 1}}>
      <Text>Library screen</Text>
      <Pressable>
        <Text>test</Text>
      </Pressable>
    </View>
  );
};

const pressableStyle: StyleProp<ViewStyle> = {
  flex: 1,
  backgroundColor: 'limegreen',
  marginVertical: 40,
  marginHorizontal: 30,
  borderRadius: 5,
};

const textStyle: StyleProp<TextStyle> = {
  flex: 1,
  color: 'white',
  margin: 25,
};

export default LibraryScreen;
