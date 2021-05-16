import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';

export default function MemoListScreen(props) {
  const { navigation } = props;
  // 画面表示時に一度だけ、ログアウトボタンを作成する
  useEffect(() => {
  // navigationにログアウトボタンを追加する。
    navigation.setOptions({
      // logout compornent
      headerRight: () => <LogOutButton />,
    });
  }, []);

  return (
    <View style={styles.container}>
      {/** memoAppView */}
      {/** memoListView */}
      <MemoList />
      {/** createButtonView */}
      <CircleButton name="plus" onPress={() => { navigation.navigate('MemoCreate'); }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});
