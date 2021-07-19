import React, { useContext } from "react"
import { View, Text, TouchableOpacity } from "react-native"

interface Props {
  onPress?: () => void
}

const MenuButton: React.FC<Props> = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={() => {
      if (onPress) onPress()
    }}>
      <View style={{
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 10,
        paddingBottom: 10,
        borderColor: "hsla(0, 0%, 48%, 0.4)",
        borderBottomWidth: 0.5,
        flexDirection: "row"
      }}>
        {children}
      </View>
    </TouchableOpacity>
  )
}

export default MenuButton