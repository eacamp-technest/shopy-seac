import {ColorValue, StyleSheet, View} from 'react-native';
import React from 'react';
import {RangeSlider} from '@react-native-assets/slider';

interface ISlider {
  min: number;
  max: number;
  thumbSize: number;
  trackHeight: number;
  step: number;
  thumpTintColor: ColorValue;
  outboundColor: ColorValue;
  inboundColor: ColorValue;
  onChange: (value: Array<number>) => void;
}

export const Slider: React.FC<ISlider> = ({
  min,
  max,
  onChange,
  thumbSize,
  trackHeight,
  step,
  outboundColor,
  thumpTintColor,
  inboundColor,
}) => {
  return (
    <View style={styles.root}>
      <RangeSlider
        minimumValue={min}
        maximumValue={max}
        trackHeight={trackHeight}
        thumbSize={thumbSize}
        step={step}
        thumbTintColor={thumpTintColor}
        outboundColor={outboundColor}
        inboundColor={inboundColor}
        onValueChange={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginBottom: 15,
  },
  track: {},
  thump: {},
});
