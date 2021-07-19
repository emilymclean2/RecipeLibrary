import React from 'react';
import {View, ViewStyle, StyleProp} from 'react-native';
import Svg, {Path, G} from 'react-native-svg';

interface Props {
  style?: StyleProp<ViewStyle>;
  outerColor?: string;
  innerColor?: string;
  size?: number;
}

const BarcodeFinder: React.FC<Props> = ({
  style,
  outerColor,
  innerColor,
  size,
}) => {
  const defaultSize = 170;
  return (
    <View style={[{opacity: 0.75}, style]}>
      <Svg
        viewBox="0 0 284.61 144.29"
        height={size || defaultSize * 2}
        width={size ? size * 2 : defaultSize * 2}>
        <G>
          <Path
            strokeMiterlimit={10}
            strokeWidth={3}
            stroke={outerColor || 'blue'}
            fill="none"
            d="M1.5 42.07V1.5h52M283.11 42.07V1.5h-52M1.5 102.21v40.58h52M283.11 102.21v40.58h-52.34"
          />
        </G>
        <G>
          <Path
            strokeMiterlimit={10}
            strokeWidth={3}
            stroke={innerColor || 'red'}
            fill="none"
            d="M142.3 59.57v25.14M129.73 72.14h25.15"
          />
        </G>
      </Svg>
    </View>
  );
};

export default BarcodeFinder;
