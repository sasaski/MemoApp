import React from 'react';
import {
  Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { func, string } from 'prop-types';

export default function Button(props) {
  const { label, onPress } = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  label: string.isRequired,
  onPress: func,
};

Button.defaultProps = {
  onPress: null,
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#467FD3',
    width: 99,
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  buttonLabel: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 32,
  },
});