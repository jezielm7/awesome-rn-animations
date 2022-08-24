import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';

import LanguageList from './src/list';

const App = () => {
  return (
    <View style={styles.container}>
      <LanguageList />
      <StatusBar backgroundColor="#1E1C2A" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E1C2A',
  },
});
