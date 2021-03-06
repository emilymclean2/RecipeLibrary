import React from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';
import Svg, {Path} from 'react-native-svg';

interface Props {
  color?: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
}

const ScannerIcon: React.FC<Props> = ({color, size, style}) => {
  return (
    <View style={style}>
      <Svg viewBox="0 0 640 512" height={size || 30} width={size || 30}>
        <Path
          fill={color || 'black'}
          d="M368 64H96c-53 0-96 43-96 96 0 52.4 42.1 94.9 94.3 95.8L6.4 408C-6.9 431 1 460.3 24 473.6l55.4 32c23 13.3 52.3 5.4 65.6-17.6l133.9-232H368c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16zM256 448c17.7 0 32-14.3 32-32V304.3L205 448h51zm376 0H456c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0-96H456c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0-288H456c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8zm0-64H456c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8zm0 288H456c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0-128H456c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"
        />
      </Svg>
    </View>
  );
};

export default ScannerIcon;
