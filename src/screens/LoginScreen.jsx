// useState 状態を保持する
// useEffect 画面を表示したときに実行する
import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity, Alert,
} from 'react-native';
import firebase from 'firebase';

import Button from '../components/Button';
import Loading from '../components/Loading';
import { translateErrors } from '../utils';
import CancelButton from '../components/CancelButton';

export default function LoginScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  // 画面表示時に実行されるhooks
  useEffect(() => { navigation.setOptions({ headerRight: () => <CancelButton /> }); }, []);
  // Login処理
  const handlePress = () => {
    setLoading(true);
    // firebaseのログイン機能を使用
    firebase.auth().signInWithEmailAndPassword(email, password)
      // ログイン成功時
      .then(() => {
        // MemoListScreenへ遷移
        navigation.reset({
          index: 0,
          routes: [{ name: 'MemoList' }],
        });
      })
      // ログイン失敗時
      .catch((error) => {
        const errorMsg = translateErrors(error.code);
        Alert.alert(errorMsg.title, errorMsg.description);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <Loading isLoading={isLoading} />
      <View style={styles.loginContainer}>
        <View>
          <Text style={styles.loginTitle}>Login</Text>
          <TextInput
            placeholder="Email Address"
            style={[styles.textInput, styles.emailAddress]}
            value={email}
            onChangeText={(text) => { setEmail(text); }}
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <TextInput
            placeholder="Password"
            style={[styles.textInput, styles.password]}
            value={password}
            onChangeText={(text) => { setPassword(text); }}
            autoCapitalize="none"
            textContentType="password"
            secureTextEntry
          />
        </View>
        <Button
          label="Submit"
          onPress={handlePress}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'SignUp' }],
              });
            }}
          >
            <Text style={[styles.footerText, styles.footerSignUpText]}>Sign up here!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDDDD',
  },
  loginContainer: {
    paddingVertical: 24,
    paddingHorizontal: 27,
  },
  loginTitle: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
    width: '100%',
    height: 48,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    padding: 8,
  },
  emailAddress: {

  },
  password: {

  },
  footer: {
    flexDirection: 'row',
    width: 185,
    height: 24,
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
  },
  footerSignUpText: {
    marginLeft: 8,
    color: '#467FD3',
  },
});
