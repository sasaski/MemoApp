import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';

export default function MemoListScreen(props) {
  const { navigation } = props;
  // メモデータを格納するようにリスト
  const [memos, setMemos] = useState([]);
  // 画面表示時に一度だけ、ログアウトボタンを作成する
  useEffect(() => {
  // navigationにログアウトボタンを追加する。
    navigation.setOptions({
      // logout compornent
      headerRight: () => <LogOutButton />,
    });
  }, []);

  // firestoreからデータを取得する
  useEffect(() => {
    // firestoreから取得
    const db = firebase.firestore();
    // firebaseから現在ログイン中のユーザ情報を取得
    const { currentUser } = firebase.auth();
    // 監視キャンセル用変数
    let unsubscribe = () => {};
    // ユーザ情報が取得できているか
    if (currentUser) {
      console.log(`users/${currentUser.uid}/memos`);
      // ドキュメント取得
      const ref = db.collection(`users/${currentUser.uid}/memos`).orderBy('updatedAt', 'desc');
      //  メソッドを使用すると、ドキュメントをリッスンできる
      unsubscribe = ref.onSnapshot((snapshot) => {
        // memoの一時保管場所List
        const userMemos = [];
        // ドキュメントがListで取得されるので、forEachで取得する
        snapshot.forEach((doc) => {
          console.log(doc.id, doc.data());
          // ドキュメントのデータ取得
          const data = doc.data();
          userMemos.push({
            id: doc.id,
            bodyText: data.bodyText,
            updatedAt: data.updatedAt.toDate(),
          });
        });
        console.log('メモ読み込み終了');
        // memodataを格納する
        setMemos(userMemos);
      }, (error) => {
        console.log(error);
        Alert.alert('データの読み込みに失敗しました');
      });
    }
    // 監視解除
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      {/** memoAppView */}
      {/** memoListView */}
      <MemoList memos={memos} />
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
