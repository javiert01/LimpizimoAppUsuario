import React from 'react';
import { SafeAreaView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import AppNavigator from './routes';
import styles from './styles';

EStyleSheet.build();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppNavigator />
    </SafeAreaView>
  );
};

export default App;
