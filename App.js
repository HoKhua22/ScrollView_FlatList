import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import Header from './components/Header';
import DATA from './data';
import Item from './components/Item';

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#FFFFFF';
    const color = item.id === selectedId ? 'white' : 'black';
    const display = item.id === selectedId ? 'flex' : 'none';
    const imgSource =
      item.id === selectedId
        ? require('./assets/shape3.png')
        : require('./assets/shape4.png');
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
        display={{ display }}
        imgSource={imgSource}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.slide}>
        <Image source={require('./assets/shape1.png')} />
        <Text style={styles.slideDate}>
          Mon 02 Nov - Sun 08 Nov 2020 {'\n'}
          {'\t\t\t\t\t\t\t\t'}
          <Text style={styles.slideTime}>(3h 20m)</Text>
        </Text>
        <Image source={require('./assets/shape2.png')} />
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    fontFamily: 'Avenir Next',
  },
  slide: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  slideDate: {
    fontWeight: 'bold',
  },
  slideTime: {
    textAlign: 'center',
    fontWeight: 'normal',
  },
});

export default App;
