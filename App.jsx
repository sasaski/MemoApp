import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/** memoAppView */}
      {/** AppBar [header] */}
      <View style={styles.appbar}>
        <View style={styles.appbarInnner}>
          <Text style={styles.appbarTitle}>Memo App</Text>
          <Text style={styles.appbarRight}>ログアウト</Text>
        </View>
      </View>
      {/** memoListView */}
      <View>
        {/** memoListItem */}
        <View style={styles.memoListItem}>
          {/** memoTitleView */}
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2020年04月28日</Text>
          </View>
          {/** deleteButtonView */}
          <View>
            <Text>X</Text>
          </View>
        </View>
        {/** memoListItem */}
        <View style={styles.memoListItem}>
          {/** memoTitleView */}
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2020年04月28日</Text>
          </View>
          {/** deleteButtonView */}
          <View>
            <Text>X</Text>
          </View>
        </View>
        {/** memoListItem */}
        <View style={styles.memoListItem}>
          {/** memoTitleView */}
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2020年04月28日</Text>
          </View>
          {/** deleteButtonView */}
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>
      {/** createButtonView */}
      <View style={styles.circleButton}>
        <Text style={styles.circleButtonLabal}>+</Text>
      </View>
      {/* eslint-disable-next-line */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
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
  memoListItem: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
    alignItems: 'center',
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
  circleButton: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    /** ios shadow */
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    /** Android shadow */
    elevation: 8,
  },
  circleButtonLabal: {
    color: '#FFFFFF',
    fontSize: 40,
    lineHeight: 40,
  },
});
