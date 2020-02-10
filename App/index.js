import React, { useEffect, useRef } from 'react';
import { SafeAreaView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { NavigationActions, StackActions } from 'react-navigation';
import AppNavigator from './routes';
import colors from './constants/colors';
import styles from './styles';

EStyleSheet.build(colors);

const App = () => {
  const appNavigator = useRef(null);

  useEffect(() => {
    const timerID = setTimeout(() => {
      _startApp();
    }, 1 * 1000);
    return () => {
      clearTimeout(timerID);
    };
  }, [appNavigator]);

  const _startApp = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'EmployeeFound', key: 'EmployeeFound' })],
    });
    appNavigator.current.dispatch(resetAction);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppNavigator ref={appNavigator} />
    </SafeAreaView>
  );
};

export default App;
