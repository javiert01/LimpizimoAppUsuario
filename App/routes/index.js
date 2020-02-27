import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeScreen from '../screens/Home';
import ServiceAcceptedScreen from '../screens/ServiceAccepted';
import SplashScreen from '../screens/Splash';
import WalkthroughScreen from '../screens/Walkthrough';
import ServiceStandbyScreen from '../screens/ServiceStandby';
import EmployeeFoundScreen from '../screens/EmployeeFound';


const RouteConfigs = {
  Home: { screen: HomeScreen },
  ServiceAccepted: { screen: ServiceAcceptedScreen },
  Splash: { screen: SplashScreen },
  Walkthrough: { screen: WalkthroughScreen },
  ServiceStandby: {screen: ServiceStandbyScreen},
  EmployeeFound: {screen: EmployeeFoundScreen}
};

const HomeNavigator = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const StackNavigatorConfig = {
  initialRouteName: 'Splash',
  initialRouteKey: 'Splash',
  headerMode: 'none',
};

const AppNavigator = createStackNavigator(RouteConfigs, StackNavigatorConfig);

const MainNavigator = createDrawerNavigator({
  Home: HomeNavigator
})


export default createAppContainer(AppNavigator);
