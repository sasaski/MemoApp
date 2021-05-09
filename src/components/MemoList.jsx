import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function MemoList() {
  return (
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
  );
}

const styles = StyleSheet.create({
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
});
