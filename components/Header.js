import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default () => {
  return (
    <View style={{ paddingTop: 20 }}>
      <Text style={styles.headerTitle}>FlatList And SrollView</Text>
      <View style={styles.viewStyleForLine}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  viewStyleForLine: {
    borderBottomColor: '#777777',
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignSelf: 'stretch',
    width: '100%',
    paddingTop: 25,
  },
});
