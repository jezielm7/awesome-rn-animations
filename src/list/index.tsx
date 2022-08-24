import React, { useState } from 'react';

import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  Dimensions,
} from 'react-native';

import { languageData } from './data';

const SCREEN_WIDTH = Dimensions.get('window').width;

const LanguageList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextItem() {
    if (currentIndex < languageData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  }

  function renderItem(index: number) {
    const item = languageData[index];

    return (
      <View style={styles.item}>
        <View style={styles.content}>
          <Image source={item.image} style={[styles.image]} />
          <Text style={styles.text}>{item.name}</Text>
        </View>
      </View>
    );
  }

  return (
    <View>
      {renderItem(currentIndex)}

      <View style={styles.button}>
        <Button title="Próximo Item" onPress={nextItem} />
      </View>
    </View>
  );
};

export default LanguageList;

const styles = StyleSheet.create({
  item: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
  },
  content: {
    width: 300,
    height: 300,
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 32,
    marginTop: 28,
    fontWeight: 'bold',
    color: '#101114',
  },
  image: {
    width: 150,
    height: 150,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 240,
    height: 48,
    marginTop: 32,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontSize: 20,
    color: '#FFFFFF',
  },
});
