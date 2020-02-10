import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/Home';
import ServiceAcceptedScreen from '../screens/ServiceAccepted';
import SplashScreen from '../screens/Splash';
import WalkthroughScreen from '../screens/Walkthrough';

const RouteConfigs = {
  Home: { screen: HomeScreen },
  ServiceAccepted: { screen: ServiceAcceptedScreen },
  Splash: { screen: SplashScreen },
  Walkthrough: { screen: WalkthroughScreen },
};

const StackNavigatorConfig = {
  initialRouteName: 'Splash',
  initialRouteKey: 'Splash',
  headerMode: 'none',
};

const AppNavigator = createStackNavigator(RouteConfigs, StackNavigatorConfig);

export default createAppContainer(AppNavigator);
