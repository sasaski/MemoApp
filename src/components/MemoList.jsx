import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from './Icon';

export default function MemoList() {
  // スクリーン以外のcomponentでNavigationを取得する
  const navigation = useNavigation();
  return (
    <View>
      {/** memoListItem */}
      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }}
      >
        {/** memoTitleView */}
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2020年04月28日</Text>
        </View>
        {/** deleteButtonView */}
        <TouchableOpacity
          onPress={() => { Alert.alert('Are you Sure?'); }}
          style={styles.delete}
        >
          <Icon name="delete" size={32} color="#B0B0B0" />
        </TouchableOpacity>
      </TouchableOpacity>
      {/** memoListItem */}
      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }}
      >
        {/** memoTitleView */}
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2020年04月28日</Text>
        </View>
        {/** deleteButtonView */}
        {/** deleteButtonView */}
        <TouchableOpacity
          onPress={() => { Alert.alert('Are you Sure?'); }}
          style={styles.delete}
        >
          <Icon name="delete" size={32} color="#B0B0B0" />
        </TouchableOpacity>
      </TouchableOpacity>
      {/** memoListItem */}
      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }}
      >
        {/** memoTitleView */}
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2020年04月28日</Text>
        </View>
        {/** deleteButtonView */}
        <TouchableOpacity
          onPress={() => { Alert.alert('Are you Sure?'); }}
          style={styles.delete}
        >
          <Icon name="delete" size={32} color="#B0B0B0" />
        </TouchableOpacity>
      </TouchableOpacity>
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
  delete: {
    padding: 8,
  },
});
