import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleProp,
  TextStyle,
  Image,
  ImageBackground,
} from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome5';
import {NavigationHelpers} from '@react-navigation/native';
import {DrawerNavigationEventMap} from '@react-navigation/drawer/lib/typescript/src/types';

//import LoginContext from '../contexts/LoginContext';

import MenuButton from './MenuButton';

import ExitIcon from './ExitIcon';
import {mainColor, lightGray} from '../colors';

const textStyle: StyleProp<TextStyle> = {
  fontSize: 28,
  textTransform: 'lowercase',
  fontWeight: '400',
  letterSpacing: 1.5,
  lineHeight: 28,
  color: mainColor,
  fontVariant: ['small-caps'],
};

type DrawerContentProps = NavigationHelpers<
  Record<string, object | undefined>,
  DrawerNavigationEventMap
>;
type EnhancedDrawerContentProps = DrawerContentProps & {
  closeDrawer(): void;
  openDrawer(): void;
  toggleDrawer(): void;
};

interface Props {
  navigation: DrawerContentProps;
}

const MenuHeader: React.FC = () => (
  <View style={{backgroundColor: mainColor}}>
    <View
      style={{
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* <Image
        source={require('../../assets/highRiskCountTransparent.png')}
        style={{width: 75, height: 75}}
      /> */}
    </View>
    <View
      style={{
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5,
      }}>
      <Text
        style={{
          color: 'white',
          fontWeight: '600',
        }}>
        test menu stuff here
      </Text>
    </View>
  </View>
);

const AppMenu: React.FC<Props> = (props) => {
  const navigation = props.navigation as EnhancedDrawerContentProps;

  return (
    <View style={{flex: 1}}>
      <MenuHeader />
      <View
        style={{
          flex: 5,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
          }}>
          <MenuButton onPress={() => navigation.navigate('Upcoming')}>
            <Text style={textStyle}>View Upcoming</Text>
          </MenuButton>
          <MenuButton onPress={() => console.log('adhoc counts clicked')}>
            <Text style={textStyle}>Ad-hoc Count</Text>
          </MenuButton>
          <MenuButton onPress={() => console.log('category count clicked')}>
            <Text style={textStyle}>Category Count</Text>
          </MenuButton>
          <MenuButton onPress={() => console.log('category count clicked')}>
            <Text style={textStyle}>Previous Counts</Text>
          </MenuButton>
        </View>
        <View
          style={{
            justifyContent: 'flex-end',
            borderColor: lightGray,
            borderTopWidth: 0.5,
          }}>
          <MenuButton
            onPress={() => {
              navigation.closeDrawer();
            }}>
            <ExitIcon
              size={24}
              color={mainColor}
              style={{
                marginRight: 10,
              }}
            />
            <Text style={textStyle}>Sign Out</Text>
          </MenuButton>
        </View>
      </View>
    </View>
  );
};

export default AppMenu;
