import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/Home';
import SplashScreen from '../screens/Splash';
import WalkthroughScreen from '../screens/Walkthrough';
import ServiceStandbyScreen from '../screens/ServiceStandby';

const RouteConfigs = {
  Home: { screen: HomeScreen },
  Splash: { screen: SplashScreen },
  Walkthrough: { screen: WalkthroughScreen },
  ServiceStandby: {screen: ServiceStandbyScreen},
};

const StackNavigatorConfig = {
  initialRouteName: 'Splash',
  initialRouteKey: 'Splash',
  headerMode: 'none',
};

const AppNavigator = createStackNavigator(RouteConfigs, StackNavigatorConfig);

export default createAppContainer(AppNavigator);
