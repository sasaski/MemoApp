import React from 'react';
import {
  View, TextInput, StyleSheet,
} from 'react-native';

import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';

export default function MemoCreateScreen(props) {
  const { navigation } = props;
  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        {/** multilineは複数行入力を許可するためのプロパティ */}
        <TextInput value="" multiline style={styles.input} />
      </View>
      <CircleButton name="check" onPress={() => { navigation.goBack(); }} />
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1,
  },
  input: {
    fontSize: 16,
    lineHeight: 24,
    flex: 1,
    // Androidがdefualtがcenterのため、明示的に指定する
    textAlignVertical: 'top',
  },
});
