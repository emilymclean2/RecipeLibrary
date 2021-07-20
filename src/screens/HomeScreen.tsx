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

type HomeNavigationProp = StackNavigationProp<StackNavigatorParams, 'Home'>;
type RouteProps = RouteProp<StackNavigatorParams, 'Home'>;

// import ScannerIcon from '../components/ScannerIcon';
import {
  FontAwesomeIcon,
  FontAwesomeIconStyle,
} from '@fortawesome/react-native-fontawesome';
import {faQuestionCircle, faBook} from '@fortawesome/free-solid-svg-icons';
import {mainColor, colors} from '../colors';

//import Icon from 'react-native-vector-icons/FontAwesome5';
// import axios from 'axios';

interface Props {
  navigation: HomeNavigationProp;
  route: RouteProps;
}

const pressableStyle: StyleProp<ViewStyle> = {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginVertical: 40,
  marginHorizontal: 30,
  padding: 50,
  borderRadius: 10,
};

const textStyle: StyleProp<TextStyle> = {
  flex: 1,
  fontSize: 25,
  color: 'white',
  paddingHorizontal: 25,
};

const HomeScreen: React.FC<Props> = ({navigation, route}) => {
  const functionName = (num: number) => {};

  return (
    <View style={{flex: 1, marginVertical: 30}}>
      <Pressable
        style={[pressableStyle, {backgroundColor: colors.lightBlue}]}
        onPress={() => {
          navigation.navigate('Search');
        }}>
        <FontAwesomeIcon icon={faQuestionCircle} color={'black'} size={50} />
        <Text style={textStyle}>Random Recipe</Text>
      </Pressable>
      <Pressable
        style={[pressableStyle, {backgroundColor: colors.lightGreen}]}
        onPress={() => {
          navigation.navigate('Library');
        }}>
        <FontAwesomeIcon icon={faBook} color={'black'} size={50} />
        <Text style={textStyle}>View Library</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
