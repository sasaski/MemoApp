import React from 'react';
import {
  TouchableOpacity, Text, StyleSheet, Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';

export default function LogOutButton() {
  // react hooksはfunctionの中で定義できないため、外だしとする
  const navigation = useNavigation();
  const handlePress = () => {
    // firebase signout処理
    firebase.auth().signOut()
      // サインアウト成功時
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      })
      // サインアウト失敗時
      .catch((error) => {
        console.log(error.code, error.messerg);
        Alert.alert('ログアウトに失敗しました');
      });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.label}>ログアウト</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 19,
    marginTop: 12,
  },
  label: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
  },
});
