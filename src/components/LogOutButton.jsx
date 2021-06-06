import React from 'react';
import {
  TouchableOpacity, Text, StyleSheet, Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';
import { shape, func } from 'prop-types';

export default function LogOutButton(props) {
  const { cleanupFuncs } = props;
  // react hooksはfunctionの中で定義できないため、外だしとする
  const navigation = useNavigation();
  const handlePress = () => {
    cleanupFuncs.memos();
    cleanupFuncs.auth();
    // firebase signout処理
    firebase.auth().signOut()
      .then(() => {
        // サインアウト成功時
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      })
      .catch(() => {
        // サインアウト失敗時
        Alert.alert('ログアウトに失敗しました');
      });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.label}>ログアウト</Text>
    </TouchableOpacity>
  );
}

LogOutButton.propTypes = {
  cleanupFuncs: shape({
    auth: func,
    memos: func,
  }).isRequired,
};

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
