import React, { useState } from 'react';

import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Reanimated, {
  SlideInUp,
  SlideOutDown,
  SlideInRight,
  SlideOutLeft,
  FadeInUp,
} from 'react-native-reanimated';

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

    const duration = 700;

    return (
      <View style={styles.item}>
        <Reanimated.View
          key={`card-${index}`}
          entering={SlideInRight.duration(duration)}
          exiting={SlideOutLeft.duration(duration)}
          style={styles.content}>
          <Reanimated.Image
            key={`image-${index}`}
            entering={SlideInUp.duration(duration / 2).springify()}
            exiting={SlideOutDown.duration(duration)}
            source={item.image}
            style={[styles.image]}
          />
          <Reanimated.Text
            key={`text-${index}`}
            entering={FadeInUp.delay(400).duration(850)}
            style={styles.text}>
            {item.name}
          </Reanimated.Text>
        </Reanimated.View>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      {renderItem(currentIndex)}

      <View style={styles.button}>
        <TouchableOpacity onPress={nextItem}>
          <Text style={styles.textButton}>Próximo Item</Text>
        </TouchableOpacity>
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
