import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarInnner}>
        <Text style={styles.appbarTitle}>Memo App</Text>
        <Text style={styles.appbarRight}>ログアウト</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  appbar: {
    width: '100%',
    height: 104,
    backgroundColor: '#467FD3',
    justifyContent: 'flex-end',
  },
  appbarInnner: {
    alignItems: 'center',
  },
  appbarRight: {
    position: 'absolute',
    right: 19,
    bottom: 8,
    fontSize: 12,
    lineHeight: 24,
    color: 'rgba(255,255,255,0.7)',
  },
  appbarTitle: {
    color: '#FFFFFF',
    marginBottom: 8,
    lineHeight: 32,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
