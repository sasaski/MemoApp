import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity, Alert,
} from 'react-native';
import firebase from 'firebase';

import Button from '../components/Button';
import { translateErrors } from '../utils';
import Loading from '../components/Loading';
import CancelButton from '../components/CancelButton';

export default function SignUpScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // 画面表示時に実行されるhooks
  useEffect(() => { navigation.setOptions({ headerRight: () => <CancelButton /> }); }, []);

  // 登録処理 function
  const handlePress = () => {
    setLoading(true);
    // firebaseの匿名ユーザ取得
    const { currentUser } = firebase.auth();
    if (!currentUser) return;
    // firebaseへemail,passwordの登録、匿名ユーザを置き換える
    const credentail = firebase.auth.EmailAuthProvider.credential(email, password);
    // 匿名アカウントから永続アカウントへの切り替え処理
    currentUser.linkWithCredential(credentail)
      // 匿名アカウントから永続アカウントへの切り替え成功時
      .then(() => {
        Alert.alert('登録完了', '登録したパスワード、Emailアドレスは大事に保管してください',
          [{
            text: 'OK',
            onPress: () => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'MemoList' }],
              });
            },
          }]);
        setLoading(false);
      // 匿名アカウントから永続アカウントへの切り替え失敗時
      }).catch((error) => {
        setLoading(false);
        const errorMsg = translateErrors(error.code);
        Alert.alert(errorMsg.title, errorMsg.description);
      });
  };

  return (
    <View style={styles.container}>
      <Loading isLoading={loading} />
      <View style={styles.loginContainer}>
        <View>
          <Text style={styles.loginTitle}>Sign Up</Text>
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
          <Text style={styles.footerText}>Already registered?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
              });
            }}
          >
            <Text style={[styles.footerText, styles.footerSignUpText]}>Login</Text>
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
