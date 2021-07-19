// import React, {useState, useEffect} from 'react';
// import {Animated, Easing, View, StyleProp, ViewStyle} from 'react-native';

// export enum SlideInOutState {
//   In,
//   Out,
//   SlideInLeft,
//   SlideOutLeft,
//   SlideInRight,
//   SlideOutRight,
// }

// const AnimatedSlideInOut: React.FC<{
//   state: SlideInOutState;
//   style?: StyleProp<ViewStyle>;
// }> = ({state, style, children}) => {
//   const show = state === SlideInOutState.In;
//   const [opacity, setOpacity] = useState(new Animated.Value(show ? 1 : 0));
//   const [translateX, setTranslateX] = useState(
//     new Animated.Value(show ? 0 : 1),
//   );

//   const slideIn = (left?: Boolean) => {
//     const easing = Easing.out(Easing.quad);
//     const duration = 350;

//     if (left) translateX.setValue(-1);
//     else translateX.setValue(1);

//     const animation = Animated.sequence([
//       Animated.delay(duration / 2),
//       Animated.parallel([
//         Animated.timing(opacity, {
//           toValue: 1,
//           duration,
//           easing,
//           useNativeDriver: true,
//         }),
//         Animated.timing(translateX, {
//           toValue: 0,
//           duration,
//           easing,
//           useNativeDriver: true,
//         }),
//       ]),
//     ]);

//     animation.start();

//     return () => animation.stop();
//   };

//   const slideOut = (left?: Boolean) => {
//     const easing = Easing.out(Easing.quad);
//     const duration = 350;

//     const animation = Animated.parallel([
//       Animated.timing(opacity, {
//         toValue: 0,
//         duration,
//         easing,
//         useNativeDriver: true,
//       }),
//       Animated.timing(translateX, {
//         toValue: left ? -1 : 1,
//         duration,
//         easing,
//         useNativeDriver: true,
//       }),
//     ]);

//     animation.start();

//     return () => animation.stop();
//   };

//   useEffect(() => {
//     let stopAnimation = () => {};

//     switch (state) {
//       case SlideInOutState.SlideInLeft:
//         stopAnimation = slideIn(true);
//         break;
//       case SlideInOutState.SlideOutLeft:
//         stopAnimation = slideOut(true);
//         break;
//       case SlideInOutState.SlideInRight:
//         stopAnimation = slideIn(false);
//         break;
//       case SlideInOutState.SlideOutRight:
//         stopAnimation = slideOut(false);
//         break;
//       // case SlideInOutState.In:
//       // case SlideInOutState.Out:
//     }

//     return stopAnimation;
//   }, [state]);

//   return (
//     <Animated.View
//       style={[
//         {
//           justifyContent: 'center',
//           opacity,
//           transform: [
//             {
//               translateX: translateX.interpolate({
//                 inputRange: [-1, 0, 1],
//                 outputRange: [-100, 0, 100],
//               }),
//             },
//           ],
//         },
//         style,
//       ]}>
//       {children}
//     </Animated.View>
//   );
// };

// export default AnimatedSlideInOut;
