import React, { useState } from 'react';
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity,
} from 'react-native';

import Button from '../components/Button';

export default function SignUpScreen(props) {
  const { navigation } = props;
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  return (
    <View style={styles.container}>
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
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'MemoList' }],
            });
          }}
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
    backgroundColor: '#F0F4F8',
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
    width: 360,
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
