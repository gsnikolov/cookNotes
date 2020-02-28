import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Overview from './components/Overview'

export default function App() {
  return (
      <Overview/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
