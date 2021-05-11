import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string } from 'prop-types';

export default function Button(props) {
  const { label } = props;
  return (
    <View style={styles.button}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </View>
  );
}

Button.propTypes = {
  label: string.isRequired,
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
