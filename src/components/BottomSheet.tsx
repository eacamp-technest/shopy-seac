import {View, StyleSheet, Modal, Pressable} from 'react-native';
import React, {
  ForwardRefRenderFunction,
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';

export interface IBottomSheetRef {
  close: () => void;
  open: () => void;
  state?: boolean;
}

interface IBottomSheet {
  children?: React.ReactNode;
}

const BottomSheet: ForwardRefRenderFunction<IBottomSheetRef, IBottomSheet> = (
  props,
  ref,
) => {
  const {children} = props;
  const [visible, setVisible] = useState<boolean>(false);

  useImperativeHandle(ref, () => ({
    open: () => setVisible(true),
    close: () => setVisible(false),
    state: visible,
  }));

  const onClose = () => (ref as {current: IBottomSheetRef})?.current.close();

  return (
    <Modal
      statusBarTranslucent
      transparent
      animationType="slide"
      visible={visible}>
      <View style={styles.modalOverlay}>
        <View style={styles.bottomSheet}>
          <Pressable onPress={onClose}>
            <View style={styles.divider} />
          </Pressable>
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default forwardRef(BottomSheet);

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  bottomSheet: {
    backgroundColor: 'white',
    borderTopLeftRadius: normalize('vertical', 16),
    borderTopRightRadius: normalize('vertical', 16),
    paddingHorizontal: normalize('horizontal', 24),
    paddingBottom: normalize('vertical', 20),
    elevation: 5,
  },
  divider: {
    width: normalize('width', 48),
    height: normalize('height', 5),
    backgroundColor: colors.sky.base,
    alignSelf: 'center',
    marginBottom: normalize('vertical', 26),
    marginTop: normalize('vertical', 8),
  },
});
