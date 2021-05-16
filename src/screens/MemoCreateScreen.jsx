import React, { useState } from 'react';
import {
  View, TextInput, StyleSheet, Alert,
} from 'react-native';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';

export default function MemoCreateScreen(props) {
  const { navigation } = props;
  const [bodyText, setBodyText] = useState('');

  // 作成完了ボタン押下時
  const handlePress = () => {
    // firebaseから現在ログインしているユーザを取得する
    const { currentUser } = firebase.auth();
    // データベースへのコネクション作成
    const db = firebase.firestore();
    // コレクションの参照（ユーザ毎にコレクションを作成する。）
    const ref = db.collection(`users/${currentUser.uid}/memos`);
    // コレクションの中にドキュメントを追加する
    ref.add({
      // 保存したいデータのkeyとvalueが同じとき下記のような書き方でOK
      bodyText,
      upDatedAt: new Date(),
    })
      // 作成成功時、docRefは成功したドキュメント
      .then((docRef) => {
        // docRef.idは成功したドキュメントのデータのidできるようにする。
        console.log('Created!', docRef.id);
        navigation.goBack();
      })
      .catch((error) => {
        console.log(error.code, error.messege);
        Alert.alret('作成に失敗しました');
      });
  };

  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        {/** multilineは複数行入力を許可するためのプロパティ */}
        <TextInput
          value={bodyText}
          multiline
          style={styles.input}
          onChangeText={(Text) => { setBodyText(Text); }}
          autoFocus
        />
      </View>
      <CircleButton name="check" onPress={handlePress} />
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1,
  },
  input: {
    fontSize: 16,
    lineHeight: 24,
    flex: 1,
    // Androidがdefualtがcenterのため、明示的に指定する
    textAlignVertical: 'top',
  },
});
