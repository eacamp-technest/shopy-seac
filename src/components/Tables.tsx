import {
    Pressable,
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    View,
    ViewStyle,
  } from 'react-native';
  import React, {isValidElement} from 'react';
  import {TypographyStyles} from 'theme/typography';
  import {colors} from 'theme/colors';
  
  interface ITables {
    content?: string;
    caption?: string;
    contentStyle?: StyleProp<TextStyle>;
    Left?: React.ReactNode | null;
    Right?: React.ReactNode | null;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
  }
  
  export const Tables: React.FC<ITables> = ({
    caption,
    content,
    Left,
    Right,
    contentStyle,
    onPress,
    style,
  }) => {
    const isLeftValid = isValidElement(Left);
    const isRightValid = isValidElement(Right);
  
    return (
      <Pressable onPress={onPress} style={[styles.root, style]}>
        {isLeftValid ? Left : null}
        <View style={styles.texts}>
          <Text style={[TypographyStyles.RegularTightRegular, contentStyle]}>
            {content}
          </Text>
          {caption ? <Text style={styles.caption}>{caption}</Text> : null}
        </View>
        {isRightValid ? Right : null}
      </Pressable>
    );
  };
  
  const styles = StyleSheet.create({
    root: {
      paddingVertical: 12,
      paddingHorizontal: 24,
      flexDirection: 'row',
      gap: 12,
      alignItems: 'center',
    },
    texts: {
      flexGrow: 1,
      justifyContent: 'center',
      gap: 4,
    },
    caption: {
      ...TypographyStyles.SmallTightRegular,
      color: colors.ink.lighter,
    },
  });