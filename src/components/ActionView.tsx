// import React, { useState, useEffect } from "react"
// import { View, Animated, Easing, Text } from "react-native"
// import Icon from "react-native-vector-icons/FontAwesome5"

// import { darkGray } from "../colors"
// import AnimatedSlideInOut, { SlideInOutState } from "./AnimatedSlideInOut"

// interface Action {
//   icon: string
//   text: string
// }

// const ActionView: React.FC<{ actions: Action[], selected: number }> = ({ actions, selected }) => {
//   return (
//     <View style={{
//       width: 350,
//       height: 160
//     }}>
//       {actions.map((action, index) => (
//         <AnimatedAction key={index} action={action} show={selected === index} />
//       ))}
//     </View>
//   )
// }

// const AnimatedAction: React.FC<{ action: Action, show?: boolean }> = ({ action, show }) => {
//   const [slideState, setSlideState] = useState(show ? SlideInOutState.In: SlideInOutState.Out)
//   const { icon, text } = action

//   useEffect(() => {
//     if (show) {
//       setSlideState(SlideInOutState.SlideInRight)
//     } else {
//       setSlideState(SlideInOutState.SlideOutLeft)
//     }
//   }, [show])

//   return (
//     <AnimatedSlideInOut state={slideState} style={{
//       position: "absolute",
//       top: 0,
//       bottom: 0,
//       left: 0,
//       right: 0,
//       justifyContent: "center",
//       alignItems: "center"
//     }}>
//       <Icon name={icon} color={darkGray} size={80} />
//       <Text style={{
//         color: darkGray,
//         fontSize: 25,
//         fontVariant: ["small-caps"],
//         textTransform: "lowercase",
//         marginTop: 10
//       }}>{text}</Text>
//     </AnimatedSlideInOut>
//   )
// }

// export default ActionView