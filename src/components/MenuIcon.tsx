import React, { useContext } from "react"
import { TouchableOpacity } from "react-native"
//import Icon from "react-native-vector-icons/FontAwesome5"
import { useNavigation } from "@react-navigation/native"

import { AppNavigationParams } from "../AppNavigator"

const MenuIcon: React.FC = () => {
  const navigation = useNavigation<AppNavigationParams>()

  return (
    <TouchableOpacity 
      style={{
        padding: 12.5
      }} 
      onPress={() => navigation.openDrawer()}
    >
      {/* <Icon name="bars" color="white" size={20} /> */}
    </TouchableOpacity>    
  )
}

export default MenuIcon