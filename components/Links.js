import * as React from 'react';
import { Linking, Platform, StyleSheet, Text, View } from 'react-native';

export default function Links({ show }) {
  return (
    <View style={[styles.linkContainer, { opacity: show ? 0.6 : 0.0 }]} pointerEvents={show ? 'auto' : 'none'}>
    </View>
  )
}


const styles = StyleSheet.create({
  linkContainer: {
    ...Platform.select({ web: { transitionDuration: '0.2s' }, default: {} }),
    position: 'absolute',
    top: 24,
    left: 24,
  },
  link: {
    fontFamily: 'kombat',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
