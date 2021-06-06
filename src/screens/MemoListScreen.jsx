import React, { useEffect, useState } from 'react';
import {
  View, StyleSheet, Alert, Text,
} from 'react-native';
import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import Button from '../components/Button';
import Loading from '../components/Loading';
import HeaderRightButton from '../components/HeaderRightButton';

export default function MemoListScreen(props) {
  const { navigation } = props;
  // メモデータを格納するようにリスト
  const [memos, setMemos] = useState([]);
  const [isLoading, setLoading] = useState(false);

  // 画面表示時に一度だけ、ログアウトボタンを作成する
  // firestoreからデータを取得する
  useEffect(() => {
    // 読み込みスタート
    setLoading(true);

    // ユーザ用の監視とメモ取得用の監視削除が必要なので、二つの監視関数を格納するオブジェクトを用意
    const cleanupFunction = {
      auth: () => {},
      memos: () => {},
    };

    // firebaseの認証状態を取得 returnはユーザ監視削除用function
    cleanupFunction.auth = firebase.auth().onAuthStateChanged((user) => {
      // 認証ユーザが存在した場合
      if (user) {
        // firestoreから取得
        const db = firebase.firestore();
        // ドキュメント取得
        const ref = db.collection(`users/${user.uid}/memos`).orderBy('updatedAt', 'desc');
        // onSnapshotメソッドを使用すると、ドキュメントをリッスンできる。returnはmemoドキュメント監視削除用function
        cleanupFunction.memos = ref.onSnapshot((snapshot) => {
          // memoの一時保管場所List
          const userMemos = [];
          // ドキュメントがListで取得されるので、forEachで取得する
          snapshot.forEach((doc) => {
            // ドキュメントのデータ取得
            const data = doc.data();
            userMemos.push({
              id: doc.id,
              bodyText: data.bodyText,
              updatedAt: data.updatedAt.toDate(),
            });
          });
          // memodataを格納する
          setMemos(userMemos);
          setLoading(false);
        }, () => {
          Alert.alert('データの読み込みに失敗しました');
          setLoading(false);
        });
        // navigationに ログアウトボタン または アカウント登録ボタン を追加する。
        navigation.setOptions({
          // logout compornent
          headerRight: () => <HeaderRightButton user={user} cleanupFuncs={cleanupFunction} />,
        });
      } else {
        // 匿名ログイン（firebaseの Authentication > Sign-in method から有効にする必要があります）
        firebase.auth().signInAnonymously()
          .catch(() => {
            // 匿名ログイン失敗
            Alert.alert('エラー', 'アプリを再起動してください');
          })
          .then(() => {
            setLoading(false);
          });
      }
    });
    // 監視解除
    return () => {
      // ユーザ監視
      cleanupFunction.auth();
      // メモ用ドキュメント監視
      cleanupFunction.memos();
    };
  }, []);

  if (memos.length === 0) {
    return (
      <View style={emptyStyles.container}>
        <Loading isLoading={isLoading} />
        <View style={emptyStyles.inner}>
          <Text style={emptyStyles.title}>最初のメモを作成しよう！</Text>
          <Button
            style={emptyStyles.button}
            label="CREATE"
            onPress={() => { navigation.navigate('MemoCreate'); }}
          />
        </View>
      </View>

    );
  }

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
    backgroundColor: '#DDDDDD',
  },
});

const emptyStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 24,
  },
  button: {

  },
});
