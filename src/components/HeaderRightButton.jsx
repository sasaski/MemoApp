import React from 'react';
import {
  TouchableOpacity, Text, StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { shape, func } from 'prop-types';

import LogOutButton from './LogOutButton';

export default function HeaderRightButton(props) {
  // react hooksはfunctionの中で定義できないため、外だしとする
  const navigation = useNavigation();
  const { user, cleanupFuncs } = props;
  // userがない場合、Nullを返却する
  if (!user) return null;
  // アカウント登録押下時
  const handlePress = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'SignUp' }],
    });
  };
  // 匿名アカウント
  if (user.isAnonymous) {
    return (
      <TouchableOpacity style={styles.container} onPress={handlePress}>
        <Text style={styles.label}>アカウント登録</Text>
      </TouchableOpacity>
    );
  }
  // 永続アカウント(登録済ユーザ)
  return (
    <LogOutButton cleanupFuncs={cleanupFuncs} />
  );
}

HeaderRightButton.propTypes = {
  user: shape().isRequired,
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
    color: 'rgba(255, 255, 255, 1)',
  },
});
