import React from 'react';
import { SafeAreaView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import AppNavigator from './routes';
import colors from './constants/colors';
import styles from './styles';

EStyleSheet.build(colors);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppNavigator />
    </SafeAreaView>
  );
};

export default App;
