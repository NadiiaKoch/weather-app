import React from 'react';
import { 
  StyleSheet, View
} from 'react-native';
import Navigation from './app/screens/Navigation';


export default function App() {
  return <Navigation />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
