import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Alert, FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  shape, string, instanceOf, arrayOf,
} from 'prop-types';

import Icon from './Icon';
import { dateToString } from '../utils';

export default function MemoList(props) {
  const { memos } = props;
  // スクリーン以外のcomponentでNavigationを取得する
  const navigation = useNavigation();

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.memoListItem}
        // 画面遷移時にタップしたmemoのidをスクリーンに渡す。
        onPress={() => { navigation.navigate('MemoDetail', { id: item.id }); }}
      >
        {/** memoTitleView */}
        <View>
          <Text style={styles.memoListItemTitle} numberOfLines={1} ellipsizeMode="clip">{item.bodyText}</Text>
          <Text style={styles.memoListItemDate}>{dateToString(item.updatedAt)}</Text>
        </View>
        {/** deleteButtonView */}
        <TouchableOpacity
          onPress={() => { Alert.alert('Are you Sure?'); }}
          style={styles.delete}
        >
          <Icon name="delete" size={32} color="#B0B0B0" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }

  return (
    <View>
      <FlatList
        data={memos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

MemoList.propTypes = {
  // memosは配列のため、arrayOfで囲む
  memos: arrayOf(shape({
    id: string,
    bodyText: string,
    // インスタンスをdateで生成しているため、instanceOfを使用する。
    updatedAt: instanceOf(Date),
  })).isRequired,
};

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
