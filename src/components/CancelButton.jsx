import React from 'react';
import {
  TouchableOpacity, StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from './Icon';

export default function CancelButton() {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'MemoList' }],
    });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Icon name="delete" color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 19,
    marginTop: 12,
  },
});
