import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SplashScreen from '../screens/Splash';
import HomeScreen from '../screens/Home';

const RouteConfigs = {
  Splash: { screen: SplashScreen },
  Home: { screen: HomeScreen },
};

const StackNavigatorConfig = {
  initialRouteName: 'Splash',
  initialRouteKey: 'Splash',
  headerMode: 'none',
};

const AppNavigator = createStackNavigator(RouteConfigs, StackNavigatorConfig);

export default createAppContainer(AppNavigator);
