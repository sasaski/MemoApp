/* eslint-disable-next-line */
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import MemoListScreen from './src/screens/MemoListScreen';
// import MemoDetailScreen from './src/screens/MemoDetailScreen';

export default function App() {
  return (
    <MemoListScreen />
    // <MemoDetailScreen />
  );
}
