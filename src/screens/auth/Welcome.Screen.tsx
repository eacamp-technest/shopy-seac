import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {CustomTextInput} from 'components/Input';
import {Button} from 'components/Button';
import {Dialog} from 'components/Dialog';

export const WelcomeScreen = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <View style={styles.root}>
      <CustomTextInput
        placeholder="Email"
        labelText="Text Label"
        leftIcon={require('../../assets/vectors/map-pin.svg')}
        rightIcon={require('../../assets/vectors/chevron-down.svg')}
      />
      <Button text="Show Dialog" onPress={() => setVisible(true)} />
      <Dialog
        title="Remove Item"
        subtitle="This item will delete"
        isVisible={visible}
        image="illustrated"
        size="middle"
        source={require('../../assets/images/image_ratio.png')}
        type="prompt"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
});
